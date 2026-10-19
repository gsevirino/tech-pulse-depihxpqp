import React, { useState } from 'react'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { enviarMensagemContato } from '@/services/techpulseService'
import { CONTATO_INFO } from '@/data/techpulse'

export default function WhatsAppFloating() {
  const [open, setOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [loading, setLoading] = useState(false)

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
        assunto: 'Orçamento Rápido via WhatsApp Flutuante',
      })

      toast.success('Mensagem pronta! Abrindo WhatsApp...')
      // Abre o wa.me em nova aba
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

      // Limpa os campos e fecha
      setNome('')
      setEmail('')
      setTelefone('')
      setMensagem('')
      setOpen(false)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Falha ao processar'
      toast.error('Erro ao abrir WhatsApp: ' + msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popover / Form flutuante */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-dialog-title"
          className="mb-4 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header do Popover */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-4 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
              aria-label="Fechar formulário"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              </div>
              <div>
                <h3 id="whatsapp-dialog-title" className="font-semibold text-base leading-tight">
                  Atendimento WhatsApp
                </h3>
                <p className="text-xs text-emerald-100">
                  {CONTATO_INFO.telefoneFormatado} • Online
                </p>
              </div>
            </div>
            <p className="text-xs text-white/90 mt-2">
              Preencha o formulário abaixo para iniciar sua conversa com nossa equipe!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 space-y-3 bg-white">
            <div className="space-y-1">
              <Label htmlFor="fab-nome" className="text-xs font-medium text-slate-700">
                Seu Nome *
              </Label>
              <Input
                id="fab-nome"
                placeholder="Ex: João Silva"
                className="h-9 text-sm"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="fab-email" className="text-xs font-medium text-slate-700">
                Seu E-mail *
              </Label>
              <Input
                id="fab-email"
                type="email"
                placeholder="Ex: joao@empresa.com"
                className="h-9 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="fab-telefone" className="text-xs font-medium text-slate-700">
                WhatsApp / Celular com DDD *
              </Label>
              <Input
                id="fab-telefone"
                placeholder="Ex: (11) 99999-9999"
                className="h-9 text-sm"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="fab-mensagem" className="text-xs font-medium text-slate-700">
                O que você precisa? *
              </Label>
              <Textarea
                id="fab-mensagem"
                placeholder="Gostaria de criar um site institucional..."
                className="text-sm min-h-[70px] resize-none"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md"
            >
              {loading ? (
                'Enviando...'
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Iniciar Conversa no WhatsApp
                </>
              )}
            </Button>

            <div className="text-center pt-1">
              <a
                href={`https://wa.me/${CONTATO_INFO.whatsappNumero}?text=${encodeURIComponent('Olá! Gostaria de um orçamento com a TechPulse.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-slate-500 hover:text-emerald-600 hover:underline inline-flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-emerald-500" />
                Ou clique aqui para abrir direto sem preencher
              </a>
            </div>
          </form>
        </div>
      )}

      {/* Botão Flutuante (FAB) Circular verde WhatsApp com subtle pulse */}
      <div className="relative group">
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <button
          onClick={() => setOpen(!open)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center transition-transform transform active:scale-95 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Abrir atendimento no WhatsApp"
          title="Fale conosco no WhatsApp"
        >
          {open ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
          )}
        </button>
      </div>
    </div>
  )
}
