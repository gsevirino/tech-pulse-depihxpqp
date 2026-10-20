import React from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  MessageCircle,
  ShoppingBag,
  Sliders,
  DollarSign,
  QrCode,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Zap,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { buildWhatsAppLink } from '@/data/techpulse'

export default function CatalogoDigital() {
  const whatsappUrl = buildWhatsAppLink(
    'Olá! Gostaria de uma demonstração do Catálogo Digital da TechPulse.',
  )

  const features = [
    {
      icon: ShoppingBag,
      title: 'Vitrine Personalizada com sua Marca',
      desc: 'Logotipo, cores, banners e categorias organizadas para criar uma experiência de compra impecável no celular.',
    },
    {
      icon: Sliders,
      title: 'Variações e Adicionais por Item',
      desc: 'Tamanhos, sabores, cores, opcionais e observações configuráveis para cada produto sem complicação.',
    },
    {
      icon: MessageCircle,
      title: 'Carrinho Direto para o WhatsApp',
      desc: 'O cliente monta o pedido completo e envia uma mensagem formatada e detalhada diretamente para o WhatsApp da sua loja.',
    },
    {
      icon: DollarSign,
      title: 'Sem Cobrança de Taxas por Pedido',
      desc: 'Você paga apenas a mensalidade fixa. 100% do lucro das suas vendas fica com a sua empresa.',
    },
    {
      icon: BookOpen,
      title: 'Painel Fácil para Cadastro de Itens',
      desc: 'Adicione fotos, altere preços, pause itens esgotados e crie promoções em segundos pelo próprio celular.',
    },
    {
      icon: QrCode,
      title: 'QR Code & Link Exclusivo para Bio',
      desc: 'Divulgue o link na bio do Instagram e imprima QR Codes para balcão, mesas e embalagens.',
    },
  ]

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-8">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-500 mb-4">
            <Link to="/" className="hover:text-orange-500">
              Início
            </Link>
            <span>/</span>
            <Link to="/sistemas" className="hover:text-orange-500">
              Sistemas
            </Link>
            <span>/</span>
            <span className="text-orange-500 font-bold">Catálogo Digital</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold">
                <ShoppingBag className="w-3.5 h-3.5 text-orange-500" />
                Vendas Ágeis & Pedidos Organizados no WhatsApp
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-[1.2]">
                Catálogo Digital — Divulgue Produtos e Receba Pedidos no WhatsApp
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                Transforme o atendimento da sua loja ou delivery. Chega de mandar fotos soltas e
                perder pedidos: entregue um catálogo interativo com carrinho e mensagem pronta para
                finalizar a venda.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 shadow-md shadow-orange-500/20"
                  >
                    Solicitar Demonstração
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>

                <a
                  href="https://catalogodigital.techpulse.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-neutral-300 text-neutral-800 hover:bg-neutral-100 rounded-full px-6 font-semibold"
                  >
                    Acessar Plataforma Real <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              <div className="pt-2 text-xs text-neutral-500 flex items-center justify-center lg:justify-start gap-2">
                <Zap className="w-4 h-4 text-orange-500" />
                <span>
                  Planos acessíveis a partir de <strong>R$ 29,90/mês</strong>
                </span>
              </div>
            </div>

            {/* Mockup Catálogo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 p-4 shadow-2xl border border-slate-800 text-white space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-sky-400" />
                    <span className="font-bold text-sm">Catálogo TechPulse</span>
                  </div>
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                    Pedido pronto para envio
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Item 1: Conjunto Linho Premium</div>
                      <div className="text-[11px] text-slate-400">Tamanho M • Cor Areia</div>
                    </div>
                    <div className="font-bold text-emerald-400">R$ 189,90</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Item 2: Camisa Casual Slim</div>
                      <div className="text-[11px] text-slate-400">Tamanho G • Azul Marinho</div>
                    </div>
                    <div className="font-bold text-emerald-400">R$ 129,90</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 space-y-2 text-xs text-emerald-200">
                  <div className="flex items-center justify-between font-bold">
                    <span>Total do Pedido:</span>
                    <span className="text-white text-sm">R$ 319,80</span>
                  </div>
                  <div className="text-[11px] text-emerald-300/80">
                    Mensagem gerada com 1 clique para o WhatsApp da sua empresa com endereço e itens
                    detalhados.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FUNCIONALIDADES (6 CARDS) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Funcionalidades
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            A Maneira Mais Rápida de Vender Online
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Simples para você cadastrar e ainda mais simples para o seu cliente comprar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={idx}
                className="border-neutral-200 hover:border-orange-500/50 hover:shadow-lg transition bg-white"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-black">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* 3. CTA FINAL */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white p-8 sm:p-12 text-center space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Pronto para Vender com seu Próprio Catálogo?
          </h2>
          <p className="text-orange-50 text-sm sm:text-base max-w-xl mx-auto">
            Configuração rápida e sem burocracia. Fale conosco no WhatsApp e receba seu catálogo
            ativo em poucos dias.
          </p>
          <div className="pt-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-black hover:bg-neutral-900 text-white font-bold rounded-full px-8 shadow-xl transition-transform hover:scale-105"
              >
                Falar com a Equipe TechPulse
                <ArrowRight className="w-4 h-4 ml-2 text-orange-400" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
