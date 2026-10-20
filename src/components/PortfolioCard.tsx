import React, { useState } from 'react'
import { ExternalLink, Globe, Layers, ArrowUpRight } from 'lucide-react'
import { PortfolioWorkItem } from '@/data/techpulse'

interface PortfolioCardProps {
  item: PortfolioWorkItem
  onOpenModal?: (item: PortfolioWorkItem) => void
}

export default function PortfolioCard({ item, onOpenModal }: PortfolioCardProps) {
  const [imageError, setImageError] = useState(false)

  const isWebsite = item.categoria === 'websites' && Boolean(item.url)

  // Iniciais para fallback
  const initials = item.titulo
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  const getAspectClass = () => {
    switch (item.aspectRatio) {
      case 'portrait':
        return 'aspect-[3/4]'
      case 'landscape':
        return 'aspect-[16/10]'
      case 'square':
      default:
        return 'aspect-[4/3]'
    }
  }

  return (
    <div
      onClick={() => onOpenModal?.(item)}
      className="group relative rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Container da Imagem */}
      <div className={`relative ${getAspectClass()} bg-neutral-950 overflow-hidden`}>
        {!imageError ? (
          <img
            src={item.imagem}
            alt={item.titulo}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-black p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-black text-2xl shadow-inner mb-2 group-hover:scale-110 transition-transform">
              {initials}
            </div>
            <span className="text-white text-sm font-bold">{item.titulo}</span>
            <span className="text-orange-400 text-xs mt-0.5">{item.categoriaLabel}</span>
          </div>
        )}

        {/* Hover Overlay Escuro com botões */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30 mb-2">
            {item.categoriaLabel}
          </span>
          <h4 className="text-base font-bold text-white max-w-xs">{item.titulo}</h4>
          {item.subtitulo && (
            <p className="text-xs text-neutral-300 mt-1 max-w-xs">{item.subtitulo}</p>
          )}

          <div className="mt-4 flex items-center gap-2">
            {isWebsite && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-lg transition-transform hover:scale-105"
              >
                <Globe className="w-3.5 h-3.5" />
                Ver Site
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <span className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-xs backdrop-blur-sm transition">
              Ver Detalhes
            </span>
          </div>
        </div>

        {/* Badge da Categoria no topo */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/85 text-orange-400 backdrop-blur-md shadow-sm border border-orange-500/30">
            {item.categoriaLabel}
          </span>
        </div>
      </div>

      {/* Detalhes do Card */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-black group-hover:text-orange-600 transition-colors line-clamp-1">
              {item.titulo}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
          </div>

          {item.subtitulo && (
            <p className="text-xs text-orange-600 font-semibold mt-0.5">{item.subtitulo}</p>
          )}

          {item.descricao && (
            <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
              {item.descricao}
            </p>
          )}

          {item.destaques && item.destaques.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.destaques.slice(0, 3).map((d, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md font-medium"
                >
                  {d}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Rodapé do Card */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
          {item.cliente && (
            <span className="text-neutral-500 font-medium truncate max-w-[170px]">
              {item.cliente}
            </span>
          )}

          {isWebsite ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-orange-600 font-bold hover:text-orange-700 hover:underline flex items-center gap-1 ml-auto"
            >
              Acessar site <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-neutral-400 text-[11px] ml-auto">Visualizar projeto</span>
          )}
        </div>
      </div>
    </div>
  )
}
