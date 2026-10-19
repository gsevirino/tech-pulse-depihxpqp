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
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import PortfolioCard from '@/components/PortfolioCard'
import {
  fetchSitesPortfolio,
  fetchSistemasPortfolio,
  fetchDepoimentos,
} from '@/services/techpulseService'
import { SiteItem, SistemaItem, DepoimentoItem, buildWhatsAppLink } from '@/data/techpulse'

export default function Index() {
  const [sites, setSites] = useState<SiteItem[]>([])
  const [sistemas, setSistemas] = useState<SistemaItem[]>([])
  const [depoimentos, setDepoimentos] = useState<DepoimentoItem[]>([])
  const [depoimentoIndex, setDepoimentoIndex] = useState(0)

  useEffect(() => {
    fetchSitesPortfolio().then((data) => setSites(data.slice(0, 3)))
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-sky-400/20 via-indigo-400/20 to-sky-200/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto Hero */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                Agência de Tecnologia & Desenvolvimento Web
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.15]">
                Sites e Sistemas Web que{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
                  Impulsionam
                </span>{' '}
                seu Negócio
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Soluções digitais personalizadas — do design de excelência à performance extrema.
                Construímos landing pages, e-commerces, portais institucionais e plataformas
                completas sob medida.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/portfolio" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full px-8 shadow-md shadow-sky-500/20 hover:scale-[1.02] transition"
                  >
                    Ver Portfólio
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
                    className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold rounded-full px-8"
                  >
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>

              {/* Badges de confiança */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Performance 100% Otimizada
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Design Responsivo & Exclusivo
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
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
                      <div className="text-xs text-slate-400">Desempenho Geral</div>
                      <div className="text-lg font-bold text-sky-400">99.8% Otimização</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                      Online & Rápido
                    </span>
                  </div>

                  {/* Stat cards inside mockup */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-[11px] text-slate-400">Core Web Vitals</div>
                      <div className="text-base font-bold text-emerald-400">Score 100</div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[98%]" />
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-[11px] text-slate-400">Conversão de Leads</div>
                      <div className="text-base font-bold text-sky-400">+240%</div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-sky-500 h-full w-[85%]" />
                      </div>
                    </div>
                  </div>

                  {/* Code snippet decoration */}
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                    <div className="text-slate-500">// TechPulse Architecture</div>
                    <div>
                      <span className="text-sky-400">const</span> stack = [
                      <span className="text-amber-300">&quot;React&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;Next.js&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;Tailwind&quot;</span>];
                    </div>
                    <div>
                      <span className="text-indigo-400">buildPlatform</span>({'{'} speed:{' '}
                      <span className="text-emerald-400">&quot;lightning&quot;</span>, seo:{' '}
                      <span className="text-emerald-400">true</span> {'}'});
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="flex items-center gap-3 p-2.5 rounded-lg bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-500/30">
                    <Zap className="w-5 h-5 text-sky-400 shrink-0" />
                    <span className="text-xs text-slate-200">
                      Mais de 9 projetos de alta performance entregues com excelência.
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
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Nossas Especialidades
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Soluções Completas para o Ecossistema Digital
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Combinamos engenharia de software de ponta, design funcional e estratégias de conversão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Sites */}
          <Link to="/sites" className="group">
            <Card className="h-full border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200">
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-200">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    Desenvolvimento de Sites
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Landing pages, sites institucionais e lojas virtuais. Opções gerenciáveis
                    (WordPress) ou código puro focado em velocidade máxima.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-semibold text-sky-600 group-hover:translate-x-1 transition-transform">
                  Saiba mais <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Card 2: Sistemas Web */}
          <Link to="/sistemas" className="group">
            <Card className="h-full border-slate-200/80 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200">
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-200">
                    <LayoutGrid className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Sistemas Web Sob Medida
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Aplicações para gestão empresarial, catálogos digitais para WhatsApp, controle
                    pet, relatórios e automação de processos.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                  Ver sistemas <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Card 3: Identidade Visual */}
          <Link to="/contato" className="group">
            <Card className="h-full border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200">
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-200">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Identidade Visual
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Criação de logotipos, manuais de marca, paletas de cores e materiais gráficos
                    para consolidar a autoridade da sua empresa.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
                  Consultar design <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Card 4: Marketing & SEO */}
          <Link to="/contato" className="group">
            <Card className="h-full border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200">
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-200">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Marketing & SEO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Otimização para mecanismos de busca (Google), tráfego pago, integração com Pixel
                    e rastreamento de conversões.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-semibold text-amber-600 group-hover:translate-x-1 transition-transform">
                  Impulsionar marca <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* 3. SEÇÃO SISTEMAS EM DESTAQUE (TechPet, Catálogo Digital, vhsys) */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-3 py-1 rounded-full border border-sky-800">
                Sistemas TechPulse
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Plataformas Prontas & Gestão Empresarial
              </h2>
              <p className="text-sm text-slate-400 max-w-xl mt-1">
                Conheça nossos sistemas especializados criados para automatizar rotinas e
                potencializar receitas.
              </p>
            </div>
            <Link to="/sistemas">
              <Button
                variant="outline"
                className="border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800"
              >
                Ver Todos os Sistemas <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sistemas.map((sis) => (
              <div
                key={sis.id || sis.slug}
                className="rounded-2xl bg-slate-950/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-sky-500/50 hover:bg-slate-950 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-sky-400 bg-sky-950 px-2.5 py-1 rounded-full border border-sky-900">
                      {sis.categoria}
                    </span>
                    <span className="text-xs text-slate-500">TechPulse</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {sis.nome}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{sis.descricao}</p>

                  {sis.destaques && (
                    <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
                      {sis.destaques.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    to={`/sistemas/${sis.slug}`}
                    className="text-sm font-semibold text-sky-400 group-hover:text-sky-300 hover:underline flex items-center gap-1"
                  >
                    Explorar Sistema <ArrowRight className="w-4 h-4" />
                  </Link>

                  {sis.url && (
                    <a
                      href={sis.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
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

      {/* 4. SEÇÃO PORTFÓLIO EM DESTAQUE (3-6 PROJETOS) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Casos Reais
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Portfólio — Projetos Recentes
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mt-1">
              Conheça alguns dos websites e plataformas entregues pela TechPulse para empresas de
              diversos segmentos.
            </p>
          </div>
          <Link to="/portfolio">
            <Button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full px-6">
              Ver Todos os Projetos
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sites.map((site) => (
            <PortfolioCard
              key={site.id}
              nome={site.nome}
              categoria={site.categoria}
              descricao={site.descricao}
              url={site.url}
            />
          ))}
        </div>
      </section>

      {/* 5. SEÇÃO DE DEPOIMENTOS REAIS */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decoração sutil */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
              O Que Nossos Clientes Dizem
            </span>

            {depoimentos.length > 0 && (
              <div className="min-h-[140px] flex flex-col justify-center animate-in fade-in duration-300">
                <p className="text-base sm:text-xl md:text-2xl font-medium text-slate-100 leading-relaxed italic">
                  &ldquo;{depoimentos[depoimentoIndex].texto}&rdquo;
                </p>
                <div className="mt-6">
                  <h4 className="text-base font-bold text-white">
                    {depoimentos[depoimentoIndex].nome}
                  </h4>
                  <p className="text-xs text-sky-400 font-medium mt-0.5">
                    {depoimentos[depoimentoIndex].cargo_empresa}
                  </p>
                </div>
              </div>
            )}

            {/* Controles do Carrossel */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={prevDepoimento}
                className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
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
                      depoimentoIndex === i ? 'w-6 bg-sky-500' : 'w-2 bg-slate-700'
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextDepoimento}
                className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
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
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Pronto para Modernizar seu Negócio?
            </h2>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
              Fale com nossa equipe técnica e descubra a solução ideal para seu site ou sistema web.
              Retornamos com uma proposta transparente e sob medida.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contato" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full px-8 shadow-lg"
                >
                  Fale Conosco
                  <ArrowRight className="w-4 h-4 ml-2 text-sky-600" />
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
                  className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 font-semibold rounded-full px-8"
                >
                  Chamar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
