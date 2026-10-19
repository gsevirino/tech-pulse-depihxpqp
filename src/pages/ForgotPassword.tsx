import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pb from '@/lib/pocketbase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { toast } from 'sonner'
import { KeyRound, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error('Informe o e-mail cadastrado')
      return
    }

    setLoading(true)
    try {
      await pb.collection('users').requestPasswordReset(email)
      setSent(true)
      toast.success('Instruções de recuperação enviadas para seu e-mail!')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Falha ao solicitar'
      toast.error('Erro ao solicitar recuperação: ' + msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-16 px-4 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md shadow-lg border-slate-200">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-2">
            <KeyRound className="w-6 h-6" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">
            Recuperar Senha
          </CardTitle>
          <CardDescription className="text-slate-600">
            Enviaremos um link seguro para você redefinir sua senha
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="text-center space-y-4 py-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <p className="text-sm text-slate-700">
                Se o e-mail <strong className="text-slate-900">{email}</strong> estiver cadastrado
                em nosso sistema, você receberá um link com as instruções em instantes.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setSent(false)}>
                Enviar novamente
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail Cadastrado</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="pl-9"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium shadow"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar Link de Recuperação'}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-slate-600">
          <Link
            to="/login"
            className="flex items-center gap-1 text-sky-600 hover:text-sky-700 hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para o Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
