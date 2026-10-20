import React from 'react'
import { Link } from 'react-router-dom'
import {
  Palette,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileText,
  Type,
  Layout,
  Layers,
  Award,
  Zap,
  ShieldCheck,
  Package,
  Eye,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PORTFOLIO_REAL_DATA, buildWhatsAppLink, CONTATO_INFO } from '@/data/techpulse'

export default function Branding() {
  const whatsappUrl = buildWhatsAppLink(
    'Olá! Gostaria de um orçamento para criação de Identidade Visual e Branding com a TechPulse.',
  )

  // Selecionar os trabalhos da categoria branding (Logo | Id Visual)
  const brandingWorks = PORTFOLIO_REAL_DATA.filter((item) => item.categoria === 'branding')

  const includedItems = [
    {
      icon: Award,
      title: 'Logotipo Exclusivo & Monograma',
      desc: 'Criação do símbolo principal, variações horizontais, verticais e submédias para avatares e ícones.',
    },
    {
      icon: Palette,
      title: 'Paleta de Cores Estratégica',
      desc: 'Combinação cromática fundamentada na psicologia das cores, com especificações para telas (HEX, RGB) e impressão (CMYK, Pantone).',
    },
    {
      icon: Type,
      title: 'Tipografia Institucional',
      desc: 'Seleção de fontes primárias e secundárias com hierarquia clara para títulos, corpo de texto, web e materiais impressos.',
    },
    {
      icon: FileText,
      title: 'Manual de Identidade Visual',
      desc: 'Guia completo com regras de aplicação, espaçamento de segurança, fundos permitidos, proibições e diretrizes de marca.',
    },
    {
      icon: Package,
      title: 'Papelaria & Mockups de Aplicação',
      desc: 'Cartões de visita, timbrados, envelopes, assinaturas de e-mail, sacolas, tags ou uniformes conforme o seu segmento.',
    },
    {
      icon: Layout,
      title: 'Kit para Redes Sociais & Web',
      desc: 'Modelos de posts para feed, stories, capas, destaques do Instagram e arquivos prontos em alta resolução (PNG, SVG, PDF e Vetor AI).',
    },
  ]

  const processSteps = [
    {
      numero: '01',
      titulo: 'Briefing & Imersão',
      desc: 'Mergulhamos na história do seu negócio, no posicionamento desejado, no público-alvo e nos principais concorrentes do seu mercado.',
    },
    {
      numero: '02',
      titulo: 'Conceituação & Pesquisa',
      desc: 'Exploramos referências visuais, moodboards conceituais e definimos a personalidade da marca: moderna, elegante, tecnológica ou acolhedora.',
    },
    {
      numero: '03',
      titulo: 'Criação & Prototipagem',
      desc: 'Desenhamos o símbolo, tipografia e paleta, aplicando em mockups realistas de produtos para você enxergar a marca viva no mercado.',
    },
    {
      numero: '04',
      titulo: 'Apresentação & Refinamento',
      desc: 'Apresentamos a proposta com justificativa conceitual e realizamos os ajustes necessários até a sua total aprovação.',
    },
    {
      numero: '05',
      titulo: 'Entrega dos Arquivos Finais',
      desc: 'Envio de todo o pacote em nuvem com arquivos vetoriais editáveis (AI, EPS, SVG), prontos para impressão (PDF alta) e uso digital (PNG/JPG).',
    },
  ]

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO BRANDING */}
      <section className="relative overflow-hidden pt-8 md:pt-16 pb-12 bg-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-500 mb-4">
            <Link to="/" className="hover:text-orange-500">
              Início
            </Link>
            <span>/</span>
            <span className="text-orange-500 font-bold">Branding & Identidade Visual</span>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              Tech & Design Hub • Criação de Marcas de Alto Impacto
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-black tracking-tight leading-[1.15]">
              Identidades Visuais que Geram{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500">
                Autoridade, Desejo e Valor
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Mais do que um logotipo: criamos universos visuais memoráveis. Do conceito do símbolo
              ao manual de aplicação completo, posicionamos a sua marca na mente do seu cliente.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Proposta no WhatsApp
                </Button>
              </a>

              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-neutral-300 text-neutral-800 hover:bg-neutral-100 font-semibold rounded-full px-8"
                >
                  Ver Trabalhos Entregues
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Badges de confiança */}
            <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                Arquivos 100% Vetoriais
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                Manual Completo de Aplicação
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                Atendimento Direto: {CONTATO_INFO.telefoneFormatado}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O QUE ESTÁ INCLUÍDO NO SERVIÇO DE BRANDING */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200">
            Escopo Completo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">
            Tudo o que sua Marca Precisa para Brilhar
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Entregamos um ecossistema de design completo, pronto para aplicações físicas e digitais
            sem complicações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {includedItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={idx}
                className="border-neutral-200/80 bg-white hover:border-orange-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-7 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* 3. SHOWCASE DOS TRABALHOS DE BRANDING DO PORTFÓLIO */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-neutral-900 px-3 py-1 rounded-full border border-orange-500/30">
                Portfólio Real TechPulse
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
                Trabalhos de Branding & Identidade Visual
              </h2>
              <p className="text-sm text-neutral-400 max-w-xl mt-1">
                Conheça algumas das identidades visuais criadas pela TechPulse para marcas dos mais
                diversos segmentos.
              </p>
            </div>

            <Link to="/portfolio">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-6 shadow-md shadow-orange-500/20">
                Ver Portfólio Completo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Grid de Imagens dos Trabalhos de Branding */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingWorks.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col hover:border-orange-500/60 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider bg-orange-500 text-white px-2.5 py-0.5 rounded-full shadow">
                    {item.categoriaLabel}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.titulo}
                    </h3>
                    {item.subtitulo && (
                      <p className="text-xs text-orange-400 font-medium mt-0.5">{item.subtitulo}</p>
                    )}
                    {item.descricao && (
                      <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                        {item.descricao}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/portfolio">
              <Button
                variant="outline"
                className="border-neutral-700 text-neutral-200 hover:text-white hover:bg-neutral-900 rounded-full px-8"
              >
                Explorar Todos os {brandingWorks.length} Projetos de Branding
                <ArrowRight className="w-4 h-4 ml-2 text-orange-500" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PROCESSO DE CRIAÇÃO DA MARCA */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200">
            Metodologia Criativa
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">
            Como Criamos sua Identidade Visual
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Etapas estruturadas com pesquisa, estratégia e design para garantir que a marca entregue
            supere todas as expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.numero}
              className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm relative group hover:border-orange-500/50 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-black text-orange-500/20 group-hover:text-orange-500 transition-colors mb-2">
                  {step.numero}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">{step.titulo}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA DIRETO WHATSAPP */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-white text-xs font-bold backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-white" />
              Vamos Construir sua Nova Marca?
            </span>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Sua Empresa Merece uma Identidade Visual Inesquecível
            </h2>

            <p className="text-orange-50 text-sm sm:text-base leading-relaxed">
              Fale diretamente com nossa equipe de design no WhatsApp. Vamos entender o que sua
              empresa precisa e apresentar um orçamento sob medida.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-black hover:bg-neutral-900 text-white font-bold rounded-full px-8 shadow-xl transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2 text-orange-400" />
                  Pedir Orçamento via WhatsApp
                </Button>
              </a>

              <Link to="/contato" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/50 text-white hover:bg-white/10 font-bold rounded-full px-8"
                >
                  Preencher Formulário de Contato
                </Button>
              </Link>
            </div>

            <p className="text-xs text-orange-100 pt-2">
              Atendimento ágil: {CONTATO_INFO.telefoneFormatado} • São Paulo / SP
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
