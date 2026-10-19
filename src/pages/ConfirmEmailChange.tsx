import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import pb from '@/lib/pocketbase/client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CheckCircle2, XCircle, ArrowRight, Loader2, RefreshCw } from 'lucide-react'

export default function ConfirmEmailChange() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') || ''
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'idle'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token) {
      setErrorMessage('Token de confirmação não fornecido.')
      setStatus('error')
      return
    }
    if (!password) {
      setErrorMessage('Informe sua senha para confirmar a alteração.')
      return
    }

    setSubmitting(true)
    try {
      await pb.collection('users').confirmEmailChange(token, password)
      pb.authStore.clear()
      setStatus('success')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Token expirado ou senha incorreta.'
      setStatus('error')
      setErrorMessage(msg)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="py-16 px-4 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md shadow-lg border-slate-200">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-2">
            <RefreshCw className="w-6 h-6" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">
            Confirmação de Troca de E-mail
          </CardTitle>
          <CardDescription className="text-slate-600">
            Validação do novo endereço eletrônico
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {status === 'idle' && (
            <form onSubmit={handleConfirm} className="space-y-4 text-left">
              <p className="text-sm text-slate-600 text-center">
                Para concluir a alteração do seu e-mail, digite sua senha de acesso.
              </p>
              <div className="space-y-2">
                <label htmlFor="confirm-pass" className="text-xs font-medium text-slate-700">
                  Sua Senha
                </label>
                <input
                  id="confirm-pass"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                disabled={submitting}
              >
                {submitting ? 'Confirmando...' : 'Confirmar Novo E-mail'}
              </Button>
            </form>
          )}

          {status === 'success' && (
            <div className="flex flex-col items-center gap-3 py-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              <p className="text-base font-semibold text-slate-900">E-mail alterado com sucesso!</p>
              <p className="text-sm text-slate-600">
                Seu endereço de e-mail foi atualizado. Por segurança, faça login novamente
                utilizando seu novo e-mail.
              </p>
              <Link to="/login" className="w-full mt-2">
                <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                  Fazer Login <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          )}

          {status === 'error' && (
            <div className="flex flex-col items-center gap-3 py-4">
              <XCircle className="w-12 h-12 text-rose-500" />
              <p className="text-base font-semibold text-slate-900">Falha ao confirmar e-mail</p>
              <p className="text-sm text-rose-600">{errorMessage}</p>
              <Link to="/login" className="w-full mt-2">
                <Button variant="outline" className="w-full">
                  Voltar para o Login
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center text-xs text-slate-500">
          TechPulse • Suporte e Segurança
        </CardFooter>
      </Card>
    </div>
  )
}
