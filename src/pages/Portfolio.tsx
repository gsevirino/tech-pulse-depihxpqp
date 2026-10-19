import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Layers, Globe, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PortfolioCard from '@/components/PortfolioCard'
import { fetchSitesPortfolio, fetchSistemasPortfolio } from '@/services/techpulseService'
import { SiteItem, SistemaItem, buildWhatsAppLink } from '@/data/techpulse'

export default function Portfolio() {
  const [filter, setFilter] = useState<'todos' | 'sites' | 'sistemas'>('todos')
  const [sites, setSites] = useState<SiteItem[]>([])
  const [sistemas, setSistemas] = useState<SistemaItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([fetchSitesPortfolio(), fetchSistemasPortfolio()]).then(
      ([sitesData, sistemasData]) => {
        setSites(sitesData)
        setSistemas(sistemasData)
        setLoading(false)
      },
    )
  }, [])

  const whatsappUrl = buildWhatsAppLink(
    'Olá! Vi o portfólio da TechPulse e gostaria de iniciar um projeto para minha empresa.',
  )

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
            <span className="text-sky-600 font-bold">Portfólio</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            Nossos Trabalhos & Projetos Entregues
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto">
            Portfólio de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
              Sites e Sistemas Web
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Conheça os projetos criados pela TechPulse: websites com design sofisticado, landing
            pages de alta conversão e sistemas para negócios de diversos setores.
          </p>

          {/* Filtros: Todos / Sites / Sistemas */}
          <div className="pt-6 flex items-center justify-center gap-2">
            <Button
              variant={filter === 'todos' ? 'default' : 'outline'}
              className={`rounded-full px-6 text-xs sm:text-sm font-semibold transition-all ${
                filter === 'todos'
                  ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-md'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setFilter('todos')}
            >
              <Layers className="w-4 h-4 mr-1.5" />
              Todos ({sites.length + sistemas.length})
            </Button>

            <Button
              variant={filter === 'sites' ? 'default' : 'outline'}
              className={`rounded-full px-6 text-xs sm:text-sm font-semibold transition-all ${
                filter === 'sites'
                  ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-md'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setFilter('sites')}
            >
              <Globe className="w-4 h-4 mr-1.5" />
              Sites ({sites.length})
            </Button>

            <Button
              variant={filter === 'sistemas' ? 'default' : 'outline'}
              className={`rounded-full px-6 text-xs sm:text-sm font-semibold transition-all ${
                filter === 'sistemas'
                  ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-md'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setFilter('sistemas')}
            >
              <LayoutGrid className="w-4 h-4 mr-1.5" />
              Sistemas ({sistemas.length})
            </Button>
          </div>
        </div>
      </section>

      {/* 2. GRADE DE PROJETOS */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {loading ? (
          <div className="min-h-[300px] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-12">
            {/* Seção Sites */}
            {(filter === 'todos' || filter === 'sites') && (
              <div className="space-y-6">
                {filter === 'todos' && (
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                    <Globe className="w-5 h-5 text-sky-600" />
                    <h2 className="text-xl font-bold text-slate-900">
                      Websites & Landing Pages ({sites.length})
                    </h2>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              </div>
            )}

            {/* Seção Sistemas */}
            {(filter === 'todos' || filter === 'sistemas') && (
              <div className="space-y-6">
                {filter === 'todos' && (
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                    <LayoutGrid className="w-5 h-5 text-indigo-600" />
                    <h2 className="text-xl font-bold text-slate-900">
                      Sistemas Web Sob Medida ({sistemas.length})
                    </h2>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sistemas.map((sis) => (
                    <PortfolioCard
                      key={sis.id || sis.slug}
                      nome={sis.nome}
                      categoria={sis.categoria}
                      descricao={sis.descricao}
                      url={sis.url}
                      destaques={sis.destaques}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* 3. CTA FINAL */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Gostou do que Viu? Seu Projeto Pode Ser o Próximo.
          </h2>
          <p className="text-sky-100 text-sm sm:text-base max-w-xl mx-auto">
            Traga sua ideia ou necessidade operacional para a TechPulse. Criamos um projeto
            exclusivo para valorizar sua empresa.
          </p>
          <div className="pt-2">
            <Link to="/contato">
              <Button
                size="lg"
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full px-8 shadow-md"
              >
                Começar um Projeto
                <ArrowRight className="w-4 h-4 ml-2 text-sky-600" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
