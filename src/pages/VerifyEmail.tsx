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
import { CheckCircle2, XCircle, ArrowRight, Loader2, MailCheck } from 'lucide-react'

export default function VerifyEmail() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') || ''
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'idle'>(
    token ? 'loading' : 'idle',
  )
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!token) return
    pb.collection('users')
      .confirmVerification(token)
      .then(() => {
        setStatus('success')
      })
      .catch((err) => {
        setStatus('error')
        setErrorMessage(err?.message || 'Token expirado ou inválido.')
      })
  }, [token])

  return (
    <div className="py-16 px-4 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md shadow-lg border-slate-200">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-2">
            <MailCheck className="w-6 h-6" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">
            Verificação de E-mail
          </CardTitle>
          <CardDescription className="text-slate-600">
            Confirmação de endereço de e-mail na TechPulse
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {status === 'loading' && (
            <div className="flex flex-col items-center gap-3 py-6">
              <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
              <p className="text-sm text-slate-600">Verificando seu token de confirmação...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="flex flex-col items-center gap-3 py-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              <p className="text-base font-semibold text-slate-900">
                E-mail verificado com sucesso!
              </p>
              <p className="text-sm text-slate-600">
                Sua conta está ativa e confirmada. Você já pode desfrutar de todas as
                funcionalidades.
              </p>
              <Link to="/login" className="w-full mt-2">
                <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                  Ir para Login <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          )}

          {status === 'error' && (
            <div className="flex flex-col items-center gap-3 py-4">
              <XCircle className="w-12 h-12 text-rose-500" />
              <p className="text-base font-semibold text-slate-900">Falha na verificação</p>
              <p className="text-sm text-rose-600">{errorMessage}</p>
              <Link to="/login" className="w-full mt-2">
                <Button variant="outline" className="w-full">
                  Voltar para o Login
                </Button>
              </Link>
            </div>
          )}

          {status === 'idle' && (
            <div className="py-4 text-sm text-slate-600">
              Nenhum token fornecido na URL. Se você recebeu um link por e-mail, clique diretamente
              nele.
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center text-xs text-slate-500">
          TechPulse • Desenvolvimento de Sites e Sistemas Web
        </CardFooter>
      </Card>
    </div>
  )
}
