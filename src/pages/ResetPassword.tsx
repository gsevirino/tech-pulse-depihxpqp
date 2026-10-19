import React, { useState } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
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
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react'

export default function ResetPassword() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get('token') || ''

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [customToken, setCustomToken] = useState(token)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const activeToken = token || customToken
    if (!activeToken) {
      toast.error('Token de recuperação não encontrado.')
      return
    }
    if (password !== passwordConfirm) {
      toast.error('As senhas digitadas não coincidem')
      return
    }
    if (password.length < 8) {
      toast.error('A senha deve conter ao menos 8 caracteres')
      return
    }

    setLoading(true)
    try {
      await pb.collection('users').confirmPasswordReset(activeToken, password, passwordConfirm)
      toast.success('Senha alterada com sucesso! Você já pode entrar com a nova senha.')
      navigate('/login')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Token inválido ou expirado'
      toast.error('Falha ao redefinir senha: ' + msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-16 px-4 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md shadow-lg border-slate-200">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-2">
            <Lock className="w-6 h-6" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">
            Redefinir Senha
          </CardTitle>
          <CardDescription className="text-slate-600">
            Digite a nova senha para a sua conta TechPulse
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!token && (
              <div className="space-y-2">
                <Label htmlFor="token">Token de Recuperação</Label>
                <Input
                  id="token"
                  placeholder="Cole o token recebido no e-mail"
                  value={customToken}
                  onChange={(e) => setCustomToken(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Nova Senha (min. 8 caracteres)</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="passwordConfirm">Confirmar Nova Senha</Label>
              <Input
                id="passwordConfirm"
                type="password"
                placeholder="••••••••"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium shadow"
              disabled={loading}
            >
              {loading ? 'Salvando...' : 'Salvar Nova Senha'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-slate-600">
          <Link to="/login" className="text-sky-600 hover:underline font-medium">
            Voltar ao Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
