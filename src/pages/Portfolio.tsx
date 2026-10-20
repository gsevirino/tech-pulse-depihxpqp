import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  ArrowRight,
  Layers,
  Palette,
  Globe,
  LayoutGrid,
  X,
  ExternalLink,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import PortfolioCard from '@/components/PortfolioCard'
import { fetchFullPortfolio } from '@/services/techpulseService'
import {
  PortfolioWorkItem,
  PortfolioCategory,
  buildWhatsAppLink,
  CONTATO_INFO,
} from '@/data/techpulse'

export default function Portfolio() {
  const [filter, setFilter] = useState<PortfolioCategory>('todos')
  const [items, setItems] = useState<PortfolioWorkItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedModalItem, setSelectedModalItem] = useState<PortfolioWorkItem | null>(null)

  useEffect(() => {
    fetchFullPortfolio().then((data) => {
      setItems(data)
      setLoading(false)
    })
  }, [])

  const filteredItems = items.filter((item) => {
    if (filter === 'todos') return true
    return item.categoria === filter
  })

  const brandingCount = items.filter((i) => i.categoria === 'branding').length
  const websitesCount = items.filter((i) => i.categoria === 'websites').length
  const designCount = items.filter((i) => i.categoria === 'design-digital').length

  const whatsappUrl = buildWhatsAppLink(
    'Olá! Estive navegando pelo portfólio da TechPulse e gostaria de iniciar um projeto para a minha empresa.',
  )

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO PORTFÓLIO */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-8 bg-white border-b border-neutral-100">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-500">
            <Link to="/" className="hover:text-orange-500">
              Início
            </Link>
            <span>/</span>
            <span className="text-orange-500 font-bold">Portfólio</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            Nossos Trabalhos & Projetos Entregues
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight max-w-3xl mx-auto">
            Portfólio Completo de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500">
              Design & Tecnologia
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Conheça a totalidade dos projetos desenvolvidos pela TechPulse: criação de marcas
            (Branding & Identidade Visual), websites e sistemas sob medida e soluções em design
            digital e gráfico.
          </p>

          {/* FILTROS OFICIAIS DO SITE TECHPULSE: TODOS, LOGO | ID VISUAL, WEBSITES, DESIGN DIGITAL | GRÁFICOS */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            <Button
              variant={filter === 'todos' ? 'default' : 'outline'}
              className={`rounded-full px-5 text-xs sm:text-sm font-bold transition-all ${
                filter === 'todos'
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20'
                  : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
              }`}
              onClick={() => setFilter('todos')}
            >
              <Layers className="w-4 h-4 mr-1.5" />
              TODOS ({items.length})
            </Button>

            <Button
              variant={filter === 'branding' ? 'default' : 'outline'}
              className={`rounded-full px-5 text-xs sm:text-sm font-bold transition-all ${
                filter === 'branding'
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20'
                  : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
              }`}
              onClick={() => setFilter('branding')}
            >
              <Palette className="w-4 h-4 mr-1.5" />
              LOGO | ID VISUAL ({brandingCount})
            </Button>

            <Button
              variant={filter === 'websites' ? 'default' : 'outline'}
              className={`rounded-full px-5 text-xs sm:text-sm font-bold transition-all ${
                filter === 'websites'
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20'
                  : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
              }`}
              onClick={() => setFilter('websites')}
            >
              <Globe className="w-4 h-4 mr-1.5" />
              WEBSITES ({websitesCount})
            </Button>

            <Button
              variant={filter === 'design-digital' ? 'default' : 'outline'}
              className={`rounded-full px-5 text-xs sm:text-sm font-bold transition-all ${
                filter === 'design-digital'
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20'
                  : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
              }`}
              onClick={() => setFilter('design-digital')}
            >
              <LayoutGrid className="w-4 h-4 mr-1.5" />
              DESIGN DIGITAL | GRÁFICOS ({designCount})
            </Button>
          </div>
        </div>
      </section>

      {/* 2. GRADE DE PROJETOS COMPLETA COM MASONRY/GRID RESPONSIVA */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {loading ? (
          <div className="min-h-[300px] flex items-center justify-center">
            <div className="w-9 h-9 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-500">
                Mostrando {filteredItems.length} de {items.length} trabalhos
              </span>
              {filter !== 'todos' && (
                <button
                  onClick={() => setFilter('todos')}
                  className="text-xs text-orange-600 hover:text-orange-700 hover:underline font-bold"
                >
                  Ver todos os trabalhos
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredItems.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  onOpenModal={(clickedItem) => setSelectedModalItem(clickedItem)}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 3. MODAL DE DETALHES DO PROJETO */}
      {selectedModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedModalItem(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white transition"
              aria-label="Fechar detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[85vh] overflow-y-auto">
              {/* Imagem do Projeto */}
              <div className="relative bg-black">
                <img
                  src={selectedModalItem.imagem}
                  alt={selectedModalItem.titulo}
                  className="w-full max-h-[460px] object-contain mx-auto"
                />
                <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider bg-orange-500 text-white px-3 py-1 rounded-full shadow">
                  {selectedModalItem.categoriaLabel}
                </span>
              </div>

              {/* Informações */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-black">{selectedModalItem.titulo}</h3>
                  {selectedModalItem.subtitulo && (
                    <p className="text-sm text-orange-600 font-semibold mt-0.5">
                      {selectedModalItem.subtitulo}
                    </p>
                  )}
                  {selectedModalItem.cliente && (
                    <p className="text-xs text-neutral-500 mt-1">
                      Cliente: <strong>{selectedModalItem.cliente}</strong>
                    </p>
                  )}
                </div>

                {selectedModalItem.descricao && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {selectedModalItem.descricao}
                  </p>
                )}

                {selectedModalItem.destaques && selectedModalItem.destaques.length > 0 && (
                  <div className="pt-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      Destaques do Projeto
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedModalItem.destaques.map((d, i) => (
                        <span
                          key={i}
                          className="text-xs bg-neutral-100 text-neutral-800 px-3 py-1 rounded-md font-medium"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  {selectedModalItem.url ? (
                    <a
                      href={selectedModalItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-6">
                        <Globe className="w-4 h-4 mr-1.5" />
                        Acessar Site Online
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </a>
                  ) : (
                    <span className="text-xs text-neutral-400 italic">
                      Projeto exclusivo entregue pela TechPulse
                    </span>
                  )}

                  <a
                    href={buildWhatsAppLink(
                      `Olá! Gostei do projeto "${selectedModalItem.titulo}" do portfólio e gostaria de um orçamento similar para a minha empresa.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-full px-6"
                    >
                      <MessageCircle className="w-4 h-4 mr-1.5" />
                      Quero um Projeto Assim
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. CTA FINAL PORTFÓLIO */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-black text-white p-8 sm:p-12 md:p-14 text-center space-y-5 shadow-2xl border border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 blur-[120px] rounded-full pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            Gostou do que Viu? Seu Projeto Pode Ser o Próximo.
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Traga sua ideia ou necessidade para a TechPulse. Criamos projetos sob medida em
            branding, websites de alta conversão e sistemas para valorizar sua empresa.
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
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 shadow-lg shadow-orange-500/25 transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Conversar no WhatsApp ({CONTATO_INFO.telefoneFormatado})
              </Button>
            </a>

            <Link to="/contato" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-neutral-700 text-white hover:bg-neutral-900 rounded-full px-8 font-semibold"
              >
                Enviar Formulário de Contato
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
