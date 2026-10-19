import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import pb from '@/lib/pocketbase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'
import { User, LogOut, KeyRound, Mail, MessageSquare, Clock, Phone, Send } from 'lucide-react'
import { useRealtime } from '@/hooks/use-realtime'

import type { RecordModel } from 'pocketbase'

interface MensagemRecord extends RecordModel {
  nome: string
  email: string
  telefone: string
  mensagem: string
}
export default function Conta() {
  const { user, logout, refreshUser } = useAuth()
  const navigate = useNavigate()

  const [nome, setNome] = useState(user?.name || '')
  const [novoEmail, setNovoEmail] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')
  const [loadingProfile, setLoadingProfile] = useState(false)
  const [loadingPassword, setLoadingPassword] = useState(false)
  const [loadingEmailChange, setLoadingEmailChange] = useState(false)

  // Mensagens em realtime para a área restrita
  const [mensagens, setMensagens] = useState<MensagemRecord[]>([])

  useEffect(() => {
    if (user?.name) setNome(user.name)
  }, [user])

  // Carregar mensagens de contato
  useEffect(() => {
    pb.collection('mensagens')
      .getList<MensagemRecord>(1, 50, { sort: '-created' })
      .then((res) => {
        setMensagens(res.items)
      })
      .catch((err) => {
        console.warn('Erro ao carregar mensagens:', err)
      })
  }, [])

  // Realtime subscription para novas mensagens
  useRealtime<MensagemRecord>('mensagens', (e) => {
    if (e.action === 'create') {
      setMensagens((prev) => [e.record, ...prev])
      toast.info(`Nova mensagem de contato recebida de ${e.record.nome}!`)
    } else if (e.action === 'delete') {
      setMensagens((prev) => prev.filter((m) => m.id !== e.record.id))
    }
  })

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return
    setLoadingProfile(true)
    try {
      await pb.collection('users').update(user.id, { name: nome })
      await refreshUser()
      toast.success('Nome atualizado com sucesso!')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Falha ao atualizar perfil'
      toast.error(msg)
    } finally {
      setLoadingProfile(false)
    }
  }

  const handleRequestEmailChange = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!novoEmail) {
      toast.error('Informe o novo e-mail')
      return
    }
    setLoadingEmailChange(true)
    try {
      await pb.collection('users').requestEmailChange(novoEmail)
      toast.success('Link de confirmação enviado para o novo e-mail!')
      setNovoEmail('')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Falha ao solicitar troca de e-mail'
      toast.error(msg)
    } finally {
      setLoadingEmailChange(false)
    }
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return
    if (newPassword !== newPasswordConfirm) {
      toast.error('As senhas digitadas não coincidem')
      return
    }
    if (newPassword.length < 8) {
      toast.error('A nova senha deve ter ao menos 8 caracteres')
      return
    }

    setLoadingPassword(true)
    try {
      await pb.collection('users').update(user.id, {
        oldPassword,
        password: newPassword,
        passwordConfirm: newPasswordConfirm,
      })
      toast.success('Senha atualizada com sucesso!')
      setOldPassword('')
      setNewPassword('')
      setNewPasswordConfirm('')
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : 'Falha ao alterar senha. Verifique a senha atual.'
      toast.error(msg)
    } finally {
      setLoadingPassword(false)
    }
  }

  const handleLogout = () => {
    logout()
    toast.info('Sessão encerrada.')
    navigate('/')
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-2xl shadow-md">
            {(user?.name || user?.email || 'U')[0].toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{user?.name || 'Administrador'}</h1>
            <p className="text-sm text-slate-500">{user?.email}</p>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={handleLogout}
          className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 border-rose-200"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sair da Conta
        </Button>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="mensagens" className="space-y-6">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 max-w-md">
            <TabsTrigger value="mensagens" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Mensagens
            </TabsTrigger>
            <TabsTrigger value="perfil" className="flex items-center gap-2">
              <User className="w-4 h-4" /> Perfil
            </TabsTrigger>
            <TabsTrigger value="seguranca" className="flex items-center gap-2">
              <KeyRound className="w-4 h-4" /> Segurança
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: Mensagens de Contato Recebidas (com Realtime) */}
          <TabsContent value="mensagens" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Mensagens de Contato</CardTitle>
                    <CardDescription>
                      Leads e contatos recebidos em tempo real pelo formulário do site
                    </CardDescription>
                  </div>
                  <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-xs font-semibold">
                    {mensagens.length} {mensagens.length === 1 ? 'registro' : 'registros'}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                {mensagens.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">
                    <MessageSquare className="w-10 h-10 mx-auto mb-2 text-slate-300" />
                    <p>Nenhuma mensagem de contato recebida ainda.</p>
                    <p className="text-xs text-slate-400 mt-1">
                      As mensagens enviadas no formulário ou WhatsApp aparecerão aqui
                      automaticamente.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {mensagens.map((msg) => (
                      <div
                        key={msg.id}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition shadow-sm space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                          <span className="font-semibold text-slate-900">{msg.nome}</span>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {new Date(msg.created).toLocaleString('pt-BR')}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                            <a
                              href={`mailto:${msg.email}`}
                              className="text-sky-600 hover:underline"
                            >
                              {msg.email}
                            </a>
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-slate-400" />
                            <a
                              href={`https://wa.me/55${msg.telefone.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-600 hover:underline flex items-center gap-1 font-medium"
                            >
                              {msg.telefone}
                            </a>
                          </span>
                        </div>
                        <div className="text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-100 whitespace-pre-wrap">
                          {msg.mensagem}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 2: Perfil */}
          <TabsContent value="perfil" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Dados Pessoais</CardTitle>
                <CardDescription>Atualize seu nome de exibição</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateProfile} className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-sky-500 hover:bg-sky-600"
                    disabled={loadingProfile}
                  >
                    {loadingProfile ? 'Salvando...' : 'Salvar Alterações'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Alterar E-mail</CardTitle>
                <CardDescription>
                  E-mail atual: <span className="font-semibold text-slate-800">{user?.email}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRequestEmailChange} className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="novoEmail">Novo Endereço de E-mail</Label>
                    <Input
                      id="novoEmail"
                      type="email"
                      placeholder="novo@email.com"
                      value={novoEmail}
                      onChange={(e) => setNovoEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" variant="outline" disabled={loadingEmailChange}>
                    {loadingEmailChange ? 'Solicitando...' : 'Solicitar Troca de E-mail'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 3: Segurança */}
          <TabsContent value="seguranca">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Alterar Senha</CardTitle>
                <CardDescription>
                  Para sua segurança, informe a senha atual para alterá-la
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdatePassword} className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="oldPassword">Senha Atual</Label>
                    <Input
                      id="oldPassword"
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nova Senha (min. 8 caracteres)</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPasswordConfirm">Confirmar Nova Senha</Label>
                    <Input
                      id="newPasswordConfirm"
                      type="password"
                      value={newPasswordConfirm}
                      onChange={(e) => setNewPasswordConfirm(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-sky-500 hover:bg-sky-600"
                    disabled={loadingPassword}
                  >
                    {loadingPassword ? 'Atualizando...' : 'Atualizar Senha'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
