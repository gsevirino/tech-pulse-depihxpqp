import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Globe,
  LayoutGrid,
  Palette,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Layers,
  Code2,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import PortfolioCard from '@/components/PortfolioCard'
import {
  fetchFullPortfolio,
  fetchSistemasPortfolio,
  fetchDepoimentos,
} from '@/services/techpulseService'
import {
  PortfolioWorkItem,
  SistemaItem,
  DepoimentoItem,
  PORTFOLIO_REAL_DATA,
  buildWhatsAppLink,
  CONTATO_INFO,
} from '@/data/techpulse'

export default function Index() {
  const [destaquesPortfolio, setDestaquesPortfolio] = useState<PortfolioWorkItem[]>([])
  const [sistemas, setSistemas] = useState<SistemaItem[]>([])
  const [depoimentos, setDepoimentos] = useState<DepoimentoItem[]>([])
  const [depoimentoIndex, setDepoimentoIndex] = useState(0)

  useEffect(() => {
    fetchFullPortfolio().then((data) => setDestaquesPortfolio(data.slice(0, 6)))
    fetchSistemasPortfolio().then(setSistemas)
    fetchDepoimentos().then(setDepoimentos)
  }, [])

  const nextDepoimento = () => {
    if (depoimentos.length === 0) return
    setDepoimentoIndex((prev) => (prev + 1) % depoimentos.length)
  }

  const prevDepoimento = () => {
    if (depoimentos.length === 0) return
    setDepoimentoIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)
  }

  const whatsappOrcamentoUrl = buildWhatsAppLink(
    'Olá! Gostaria de um orçamento para criação do meu site ou sistema web.',
  )

  return (
    <div className="space-y-24 pb-20">
      {/* 1. SEÇÃO HERO */}
      <section className="relative overflow-hidden pt-8 md:pt-16 pb-12">
        {/* Gradientes decorativos de fundo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-orange-500/15 via-orange-400/10 to-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto Hero */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                Tech & Design Hub • Desenvolvimento Web & Branding
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-black leading-[1.15]">
                Branding, Sites e Sistemas que{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500">
                  Transformam
                </span>{' '}
                seu Negócio
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Soluções sob medida em design e engenharia: criamos identidades visuais memoráveis,
                websites de alta conversão, e-commerces e softwares de gestão com eficiência e
                controle total.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/portfolio" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 shadow-md shadow-orange-500/25 hover:scale-[1.02] transition"
                  >
                    Ver Portfólio Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <a
                  href={whatsappOrcamentoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-neutral-300 text-neutral-800 hover:bg-neutral-100 font-bold rounded-full px-8"
                  >
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>

              {/* Badges de confiança */}
              <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-neutral-600">
                <span className="flex items-center gap-1.5 font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  Identidade Visual Completa
                </span>
                <span className="flex items-center gap-1.5 font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  Performance 100% Otimizada
                </span>
                <span className="flex items-center gap-1.5 font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  Suporte Técnico Dedicado
                </span>
              </div>
            </div>

            {/* Mockup Ilustrativo CSS Hero */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-[460px] rounded-2xl bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-800">
                {/* Browser bar */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-400 font-mono">
                    techpulse.com.br
                  </div>
                  <div className="w-8" />
                </div>

                {/* Dashboard simulation */}
                <div className="p-4 space-y-4 bg-slate-950/80 rounded-xl mt-2 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-neutral-400">Desempenho Geral</div>
                      <div className="text-lg font-bold text-orange-400">99.8% Otimização</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">
                      Tech & Design Hub
                    </span>
                  </div>

                  {/* Stat cards inside mockup */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                      <div className="text-[11px] text-neutral-400">Identidades & Sites</div>
                      <div className="text-base font-bold text-orange-400">+35 Projetos</div>
                      <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-orange-500 h-full w-[95%]" />
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                      <div className="text-[11px] text-neutral-400">Conversão de Leads</div>
                      <div className="text-base font-bold text-white">+240%</div>
                      <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-orange-500 h-full w-[85%]" />
                      </div>
                    </div>
                  </div>

                  {/* Code snippet decoration */}
                  <div className="p-3 rounded-lg bg-neutral-900/90 border border-neutral-800 font-mono text-[11px] text-neutral-300 space-y-1">
                    <div className="text-neutral-500">// TechPulse Hub Architecture</div>
                    <div>
                      <span className="text-orange-400">const</span> hub = [
                      <span className="text-amber-300">&quot;Branding&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;Websites&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;Systems&quot;</span>];
                    </div>
                    <div>
                      <span className="text-orange-400">deliverSuccess</span>({'{'} design:{' '}
                      <span className="text-amber-300">&quot;premium&quot;</span>, code:{' '}
                      <span className="text-amber-300">&quot;scalable&quot;</span> {'}'});
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="flex items-center gap-3 p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/30">
                    <Zap className="w-5 h-5 text-orange-400 shrink-0" />
                    <span className="text-xs text-neutral-200">
                      Portfólio completo com branding, websites e design digital entregues.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE DIFERENCIAIS / SERVIÇOS (CARDS) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Nossas Especialidades
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-black">
            Soluções Completas para o Ecossistema Digital
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Design de alto impacto, engenharia de software de ponta e branding que valoriza sua
            marca.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Branding */}
          <Link to="/branding" className="group">
            <Card className="h-full border-neutral-200/90 hover:border-orange-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 bg-white">
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-200">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-orange-600 transition-colors">
                    Branding & Identidade Visual
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Logotipos exclusivos, paletas de cores, tipografia e manuais de marca que
                    transformam sua empresa em referência.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  Ver página de branding <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Card 2: Desenvolvimento de Sites */}
          <Link to="/sites" className="group">
            <Card className="h-full border-neutral-200/90 hover:border-orange-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 bg-white">
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-200">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-orange-600 transition-colors">
                    Desenvolvimento de Sites
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Landing pages, sites institucionais e lojas virtuais com foco em velocidade
                    máxima e alta conversão de clientes.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-bold text-neutral-900 group-hover:translate-x-1 transition-transform">
                  Conhecer sites <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Card 3: Sistemas Web */}
          <Link to="/sistemas" className="group">
            <Card className="h-full border-neutral-200/90 hover:border-orange-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 bg-white">
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-200">
                    <LayoutGrid className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-orange-600 transition-colors">
                    Sistemas Web Sob Medida
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Plataformas como TechPet, Catálogo Digital para WhatsApp e implementação de ERP
                    vhsys completo.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  Ver sistemas <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Card 4: Design Digital & Gráfico */}
          <Link to="/portfolio" className="group">
            <Card className="h-full border-neutral-200/90 hover:border-orange-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 bg-white">
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-200">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-orange-600 transition-colors">
                    Design Digital & Gráfico
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Criativos para redes sociais, banners, papelaria, etiquetas e apresentações
                    comerciais de alto padrão.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-bold text-neutral-900 group-hover:translate-x-1 transition-transform">
                  Explorar artes <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* 3. SEÇÃO SISTEMAS EM DESTAQUE (TechPet, Catálogo Digital, vhsys) */}
      <section className="bg-black text-white py-20 border-y border-neutral-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-neutral-900 px-3 py-1 rounded-full border border-orange-500/30">
                Sistemas TechPulse
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
                Plataformas Prontas & Gestão Empresarial
              </h2>
              <p className="text-sm text-neutral-400 max-w-xl mt-1">
                Conheça nossos softwares especializados criados para automatizar rotinas e
                potencializar receitas.
              </p>
            </div>
            <Link to="/sistemas">
              <Button
                variant="outline"
                className="border-neutral-700 text-neutral-200 hover:text-white hover:bg-neutral-900"
              >
                Ver Todos os Sistemas <ArrowRight className="w-4 h-4 ml-1.5 text-orange-500" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sistemas.map((sis) => (
              <div
                key={sis.id || sis.slug}
                className="rounded-2xl bg-[#0F0F0F] border border-neutral-800 p-6 flex flex-col justify-between hover:border-orange-500/50 hover:bg-neutral-950 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/30">
                      {sis.categoria}
                    </span>
                    <span className="text-xs text-neutral-500">TechPulse Hub</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {sis.nome}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{sis.descricao}</p>

                  {sis.destaques && (
                    <ul className="space-y-1.5 pt-2 text-xs text-neutral-300">
                      {sis.destaques.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between">
                  <Link
                    to={`/sistemas/${sis.slug}`}
                    className="text-sm font-semibold text-orange-400 group-hover:text-orange-300 hover:underline flex items-center gap-1"
                  >
                    Explorar Sistema <ArrowRight className="w-4 h-4" />
                  </Link>

                  {sis.url && (
                    <a
                      href={sis.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-500 hover:text-white flex items-center gap-1"
                    >
                      Acessar <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO PORTFÓLIO EM DESTAQUE (BRANDS + WEBSITES) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Casos Reais TechPulse
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-black mt-2">
              Portfólio em Destaque
            </h2>
            <p className="text-sm text-neutral-600 max-w-xl mt-1">
              Marcas, identidades visuais e websites desenvolvidos para nossos clientes.
            </p>
          </div>
          <Link to="/portfolio">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-6 shadow-md shadow-orange-500/20">
              Ver Portfólio Completo ({PORTFOLIO_REAL_DATA.length} trabalhos)
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destaquesPortfolio.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 5. SEÇÃO DE DEPOIMENTOS REAIS */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#0A0A0A] text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-neutral-800">
          {/* Decoração sutil */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-neutral-900 px-3 py-1 rounded-full border border-orange-500/30">
              O Que Nossos Clientes Dizem
            </span>

            {depoimentos.length > 0 && (
              <div className="min-h-[140px] flex flex-col justify-center animate-in fade-in duration-300">
                <p className="text-base sm:text-xl md:text-2xl font-medium text-neutral-100 leading-relaxed italic">
                  &ldquo;{depoimentos[depoimentoIndex].texto}&rdquo;
                </p>
                <div className="mt-6">
                  <h4 className="text-base font-bold text-white">
                    {depoimentos[depoimentoIndex].nome}
                  </h4>
                  <p className="text-xs text-orange-400 font-bold mt-0.5">
                    {depoimentos[depoimentoIndex].cargo_empresa}
                  </p>
                </div>
              </div>
            )}

            {/* Controles do Carrossel */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={prevDepoimento}
                className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {depoimentos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setDepoimentoIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      depoimentoIndex === i ? 'w-6 bg-orange-500' : 'w-2 bg-neutral-800'
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextDepoimento}
                className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO CTA FINAL */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Pronto para Modernizar seu Negócio?
            </h2>
            <p className="text-orange-50 text-sm sm:text-base leading-relaxed">
              Fale com nossa equipe técnica e de design para descobrir a solução ideal em branding,
              site ou sistema web.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappOrcamentoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-black hover:bg-neutral-900 text-white font-bold rounded-full px-8 shadow-xl transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-orange-400" />
                  Chamar no WhatsApp ({CONTATO_INFO.telefoneFormatado})
                </Button>
              </a>
              <Link to="/contato" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/50 text-white hover:bg-white/10 font-bold rounded-full px-8"
                >
                  Fale Conosco
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
