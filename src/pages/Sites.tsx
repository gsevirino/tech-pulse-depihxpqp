import React from 'react'
import { Link } from 'react-router-dom'
import {
  Rocket,
  Building2,
  ShoppingCart,
  Sliders,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Search,
  Code2,
  Cpu,
  Gauge,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { buildWhatsAppLink } from '@/data/techpulse'

export default function Sites() {
  const whatsappUrl = buildWhatsAppLink(
    'Olá! Gostaria de um orçamento para desenvolvimento de um site com a TechPulse.',
  )

  const siteTypes = [
    {
      id: 'landing-pages',
      icon: Rocket,
      title: 'Landing Pages',
      subtitle: 'Foco total em conversão e captação de leads qualificados',
      description:
        'Páginas estratégicas estruturadas para transformar visitantes em clientes imediatos. Ideais para campanhas de tráfego pago (Google Ads, Meta Ads), lançamentos de produtos e serviços específicos.',
      features: [
        'Copywriting e estrutura orientados à conversão rápida',
        'Integração direta com WhatsApp, CRM e formulários',
        'Carregamento instantâneo para reduzir taxa de rejeição',
        'Otimização completa para anúncios e tags de rastreamento (Pixel, GA4)',
      ],
      tag: 'Alta Conversão',
    },
    {
      id: 'sites-institucionais',
      icon: Building2,
      title: 'Sites Institucionais',
      subtitle: 'Apresentação completa, credibilidade e presença digital corporativa',
      description:
        'A vitrine digital definitiva da sua marca. Estrutura multipáginas planejada para transmitir confiança, detalhar produtos ou serviços, exibir cases de sucesso e apresentar a equipe com design exclusivo.',
      features: [
        'Arquitetura de informação completa (Sobre, Serviços, Blog, Contato)',
        'Design 100% alinhado à identidade visual da empresa',
        'SEO inicial para ranqueamento orgânico no Google',
        'Layout responsivo impecável em smartphones, tablets e desktops',
      ],
      tag: 'Presença & Autoridade',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-commerce & Lojas Virtuais',
      subtitle: 'Catálogo robusto, carrinho inteligente e pagamentos seguros',
      description:
        'Lojas virtuais modernas preparadas para vender 24 horas por dia. Desde catálogos enxutos até grandes lojas com gestão de estoque, cálculo automático de frete e integrações de checkout.',
      features: [
        'Catálogo de produtos com variações (cor, tamanho, modelo)',
        'Checkout simplificado e integrado com gateways de pagamento',
        'Cálculo de frete em tempo real (Correios, transportadoras)',
        'Painel para gestão de pedidos, clientes e cupons promocionais',
      ],
      tag: 'Vendas Online',
    },
    {
      id: 'sites-gerenciaveis',
      icon: Sliders,
      title: 'Sites Gerenciáveis (WordPress)',
      subtitle: 'Autonomia para editar textos, fotos e notícias sem conhecimento técnico',
      description:
        'Para empresas que precisam atualizar conteúdos com frequência — publicação de artigos, fotos de portfólio, notícias e banners. Entregamos um painel administrativo intuitivo e realizamos treinamento com a sua equipe.',
      features: [
        'Painel administrativo em português e fácil de operar',
        'Edição visual de blocos, banners e textos com poucos cliques',
        'Treinamento completo para sua equipe operar sem dependência',
        'Segurança reforçada contra invasões e backups automáticos',
      ],
      tag: 'Autonomia Total',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Descoberta',
      desc: 'Mapeamento profundo do seu negócio, público-alvo, objetivos comerciais e diferenciais competitivos.',
    },
    {
      step: '02',
      title: 'Design & UI/UX',
      desc: 'Criação de protótipos visuais modernos, intuitivos e totalmente alinhados à identidade da sua marca.',
    },
    {
      step: '03',
      title: 'Desenvolvimento',
      desc: 'Codificação limpa, responsiva e performática com os melhores padrões e tecnologias da web moderna.',
    },
    {
      step: '04',
      title: 'Entrega & Suporte',
      desc: 'Deploy em ambiente de alta disponibilidade, testes rigorosos, indexação no Google e acompanhamento contínuo.',
    },
  ]

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO DA PÁGINA */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-8">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-400/15 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-sky-600">
              Início
            </Link>
            <span>/</span>
            <span className="text-sky-600 font-bold">Sites</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            Engenharia & Design de Sites
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto">
            Desenvolvimento de Sites que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
              Convertem e Impressionam
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Do design à performance extrema. Criamos websites sob medida para posicionar sua empresa
            como autoridade e gerar novos negócios todos os dias.
          </p>

          {/* Âncoras rápidas de navegação */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <a
              href="#landing-pages"
              className="text-xs bg-white px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:border-sky-500 hover:text-sky-600 transition"
            >
              Landing Pages
            </a>
            <a
              href="#sites-institucionais"
              className="text-xs bg-white px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:border-sky-500 hover:text-sky-600 transition"
            >
              Sites Institucionais
            </a>
            <a
              href="#ecommerce"
              className="text-xs bg-white px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:border-sky-500 hover:text-sky-600 transition"
            >
              E-commerce
            </a>
            <a
              href="#sites-gerenciaveis"
              className="text-xs bg-white px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:border-sky-500 hover:text-sky-600 transition"
            >
              Sites Gerenciáveis (WordPress)
            </a>
            <a
              href="#sites-alta-performance"
              className="text-xs bg-sky-500 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-sky-600 transition"
            >
              Foco em Performance (Código Puro)
            </a>
          </div>
        </div>
      </section>

      {/* 2. TIPOS DE SITES (BLOCOS DETALHADOS) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {siteTypes.map((type, idx) => {
          const Icon = type.icon
          const isReversed = idx % 2 === 1

          return (
            <div
              key={type.id}
              id={type.id}
              className={`rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm hover:shadow-md transition grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isReversed ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div
                className={`space-y-4 ${isReversed ? 'lg:col-span-7 lg:col-start-6' : 'lg:col-span-7'}`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
                    {type.tag}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{type.title}</h2>
                <p className="text-sm sm:text-base font-medium text-slate-700">{type.subtitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{type.description}</p>

                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                  {type.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6">
                      Cotar este modelo <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Bloco ilustrativo decorativo */}
              <div
                className={`rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 p-6 text-white shadow-lg ${
                  isReversed ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-5'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-slate-400">techpulse // {type.id}</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <p className="text-sky-400 font-bold">// Características Técnicas</p>
                    <p>• Arquitetura responsiva mobile-first</p>
                    <p>• Otimização para buscadores (SEO)</p>
                    <p>• Carregamento inteligente (Lazy Loading)</p>
                    <p>• Certificado de Segurança SSL / HTTPS</p>
                    <p>• Suporte contínuo pós-entrega</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Garantia de Qualidade</span>
                    <span className="text-emerald-400 font-semibold">100% Validado</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* 3. DESTAQUE ESPECIAL: SITES NÃO-GERENCIÁVEIS (FOCO EM PERFORMANCE) */}
        <div
          id="sites-alta-performance"
          className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white p-8 sm:p-12 border-2 border-sky-500/40 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-500/30">
                <Gauge className="w-3.5 h-3.5 text-sky-400" />
                Diferencial Exclusivo TechPulse
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Sites Não-Gerenciáveis — Foco em Performance Extrema
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Para quem não precisa alterar conteúdos semanalmente e busca a{' '}
                <strong>velocidade máxima absoluta</strong>. Construídos em código puro, sem o peso
                de CMSs pesados ou plugins desnecessários. O resultado é carregamento abaixo de 1
                segundo, pontuação máxima no Google PageSpeed e índice imbatível de conversão.
              </p>

              {/* Badges de tecnologias e atributos */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/40 text-xs font-semibold">
                  HTML5 / CSS3 / JavaScript
                </span>
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/40 text-xs font-semibold">
                  React & Next.js
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold">
                  Core Web Vitals 100/100
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-semibold">
                  SEO Técnico Avançado
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold">
                  Código Limpo & Minificado
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-semibold">
                  Zero Vulnerabilidade de Plugins
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-black text-white">Carregamento &lt; 0.8s</div>
                <div className="text-xs text-slate-400 mt-1">Velocidade que o Google prioriza</div>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold">
                  Quero Alta Performance
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DO PROCESSO DE DESENVOLVIMENTO (TIMELINE) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Metodologia TechPulse
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Como Funciona o Processo de Desenvolvimento
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Etapas estruturadas com transparência do primeiro contato ao suporte pós-lançamento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm relative group hover:border-sky-300 transition"
            >
              <div className="text-3xl font-black text-sky-500/20 group-hover:text-sky-500/40 transition-colors mb-2">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Tem um Projeto de Site em Mente?
            </h2>
            <p className="text-sky-100 text-sm sm:text-base">
              Conte-nos sua necessidade. Avaliamos se o melhor caminho é uma landing page rápida, um
              portal institucional, WordPress gerenciável ou código puro de alta performance.
            </p>
            <div className="pt-2">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full px-8 shadow-lg"
                >
                  Solicitar Orçamento via WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 text-sky-600" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
