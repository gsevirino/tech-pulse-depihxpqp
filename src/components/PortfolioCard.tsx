import React, { useState } from 'react'
import { ExternalLink, Globe } from 'lucide-react'
import { getScreenshotUrl } from '@/data/techpulse'

interface PortfolioCardProps {
  nome: string
  categoria: string
  descricao?: string
  url?: string
  destaques?: string[]
}

export default function PortfolioCard({
  nome,
  categoria,
  descricao,
  url,
  destaques,
}: PortfolioCardProps) {
  const [imageError, setImageError] = useState(false)
  const screenshotSrc = url ? getScreenshotUrl(url) : ''

  // Iniciais para o fallback caso screenshot falhe
  const initials = nome
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="group rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-950 overflow-hidden">
        {screenshotSrc && !imageError ? (
          <img
            src={screenshotSrc}
            alt={`Screenshot do projeto ${nome}`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-900/60 via-slate-900 to-indigo-950 p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-black text-2xl shadow-inner mb-2 group-hover:scale-110 transition-transform">
              {initials}
            </div>
            <span className="text-white/80 text-sm font-semibold">{nome}</span>
            <span className="text-sky-300 text-xs mt-0.5">{categoria}</span>
          </div>
        )}

        {/* Hover Overlay com botão Ver Site */}
        {url && (
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-lg transition-transform transform hover:scale-105"
            >
              <Globe className="w-4 h-4" />
              Ver Site
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Badge categoria no topo */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-md shadow-sm border border-slate-200/50">
            {categoria}
          </span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
            {nome}
          </h3>
          {descricao && (
            <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
              {descricao}
            </p>
          )}

          {destaques && destaques.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {destaques.slice(0, 3).map((d, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                >
                  {d}
                </span>
              ))}
            </div>
          )}
        </div>

        {url ? (
          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-sky-600 hover:text-sky-700 hover:underline flex items-center gap-1"
            >
              Acessar projeto online <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-400 italic">
            Implementação e consultoria sob demanda
          </div>
        )}
      </div>
    </div>
  )
}
