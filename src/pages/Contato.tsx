import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'
import { CONTATO_INFO, buildWhatsAppLink } from '@/data/techpulse'
import { enviarMensagemContato } from '@/services/techpulseService'

export default function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [loading, setLoading] = useState(false)
  const [enviadoSucesso, setEnviadoSucesso] = useState(false)

  const directWhatsAppUrl = buildWhatsAppLink('Olá! Gostaria de um orçamento para meu projeto.')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome.trim() || !email.trim() || !telefone.trim() || !mensagem.trim()) {
      toast.error('Preencha todos os campos obrigatórios.')
      return
    }

    setLoading(true)
    try {
      const { whatsappUrl } = await enviarMensagemContato({
        nome: nome.trim(),
        email: email.trim(),
        telefone: telefone.trim(),
        mensagem: mensagem.trim(),
        assunto: 'Orçamento via Formulário da Página Contato',
      })

      toast.success('Formulário registrado! Redirecionando para o WhatsApp...')
      setEnviadoSucesso(true)

      // Abrir o WhatsApp pré-preenchido
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Falha ao processar contato'
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-8">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-400/15 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-sky-600">
              Início
            </Link>
            <span>/</span>
            <span className="text-sky-600 font-bold">Contato</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            Atendimento Rápido & Personalizado
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto">
            Fale Conosco e Solicite seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
              Orçamento Sem Compromisso
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Estamos prontos para entender seu desafio técnico e propor a melhor arquitetura para o
            seu site ou sistema web.
          </p>
        </div>
      </section>

      {/* 2. CONTEÚDO EM 2 COLUNAS (INFORMAÇÕES + FORMULÁRIO) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Coluna Esquerda: Informações de Contato */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 shadow-xl space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Canais Oficiais
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">TechPulse Tecnologia</h2>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Entre em contato diretamente pelos canais abaixo ou utilize nosso formulário ao
                  lado com envio automático via WhatsApp.
                </p>
              </div>

              <div className="space-y-5 text-sm text-slate-300">
                <a
                  href={`mailto:${CONTATO_INFO.email}`}
                  className="flex items-start gap-4 hover:text-sky-400 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">E-mail Comercial</div>
                    <div className="font-semibold text-white mt-0.5">{CONTATO_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:text-emerald-400 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">WhatsApp / Telefone</div>
                    <div className="font-semibold text-white mt-0.5">
                      {CONTATO_INFO.telefoneFormatado}
                    </div>
                    <span className="text-[11px] text-emerald-400">Clique para abrir conversa</span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Localização</div>
                    <div className="font-semibold text-white mt-0.5">{CONTATO_INFO.cidade}</div>
                    <span className="text-[11px] text-slate-400">
                      Atendemos todo o Brasil e exterior
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Horário de Atendimento</div>
                    <div className="font-semibold text-white mt-0.5">{CONTATO_INFO.horario}</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Seus dados estão protegidos. Não enviamos spam.</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário de Contato com Envio para WhatsApp */}
          <div className="lg:col-span-7">
            <Card className="rounded-3xl border-slate-200/80 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-8 sm:p-10 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Envie sua Mensagem</h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Preencha os campos abaixo. Ao clicar em enviar, a mensagem será registrada e
                    encaminhada automaticamente com o texto pré-preenchido para o WhatsApp{' '}
                    <strong>(11) 97290-4309</strong>.
                  </p>
                </div>

                {enviadoSucesso && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong>Mensagem enviada com sucesso!</strong>
                      <p className="mt-0.5 text-emerald-800">
                        A janela do WhatsApp foi iniciada. Caso não tenha aberto,{' '}
                        <a
                          href={directWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline"
                        >
                          clique aqui para abrir manualmente
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="contato-nome">Seu Nome *</Label>
                      <Input
                        id="contato-nome"
                        placeholder="Ex: Ana Clara"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="contato-email">Seu E-mail *</Label>
                      <Input
                        id="contato-email"
                        type="email"
                        placeholder="Ex: ana@empresa.com.br"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contato-telefone">Telefone / WhatsApp com DDD *</Label>
                    <Input
                      id="contato-telefone"
                      placeholder="Ex: (11) 97290-4309"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contato-mensagem">Como podemos ajudar seu projeto? *</Label>
                    <Textarea
                      id="contato-mensagem"
                      placeholder="Descreva detalhes como: tipo de site ou sistema desejado, funcionalidades principais, prazo esperado..."
                      rows={5}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base py-6 rounded-xl shadow-md transition"
                    >
                      {loading ? (
                        'Processando envio...'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Mensagem via WhatsApp
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
