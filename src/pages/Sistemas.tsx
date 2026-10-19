import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  PawPrint,
  BookOpen,
  LayoutDashboard,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Shield,
  Clock,
  Layers,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fetchSistemasPortfolio } from '@/services/techpulseService'
import { SistemaItem, buildWhatsAppLink } from '@/data/techpulse'

export default function Sistemas() {
  const [sistemas, setSistemas] = useState<SistemaItem[]>([])
  const whatsappUrl = buildWhatsAppLink(
    'Olá! Gostaria de falar sobre os sistemas web da TechPulse.',
  )

  useEffect(() => {
    fetchSistemasPortfolio().then(setSistemas)
  }, [])

  const getIconForSlug = (slug: string) => {
    switch (slug) {
      case 'techpet':
        return PawPrint
      case 'catalogo-digital':
        return BookOpen
      case 'vhsys':
      default:
        return LayoutDashboard
    }
  }

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-8">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-400/15 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-sky-600">
              Início
            </Link>
            <span>/</span>
            <span className="text-sky-600 font-bold">Sistemas</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            Engenharia de Software & Plataformas
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto">
            Sistemas Web Sob Medida para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
              Escalar sua Operação
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Elimine planilhas confusas e processos manuais. Desenvolvemos e implementamos sistemas
            inteligentes que conectam vendas, estoque, agendamentos e clientes.
          </p>
        </div>
      </section>

      {/* 2. LISTA DE SISTEMAS (CARDS COMPLETOS) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sistemas.map((sis) => {
            const Icon = getIconForSlug(sis.slug)

            return (
              <div
                key={sis.id || sis.slug}
                className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                      {sis.categoria}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{sis.nome}</h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {sis.descricao}
                    </p>
                  </div>

                  {sis.destaques && sis.destaques.length > 0 && (
                    <div className="pt-2 border-t border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Destaques da Plataforma
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {sis.destaques.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                  <Link to={`/sistemas/${sis.slug}`} className="block">
                    <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl">
                      Explorar Sistema
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                  {sis.url && (
                    <a
                      href={sis.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-xs text-slate-500 hover:text-sky-600 hover:underline"
                    >
                      Conhecer plataforma online <ExternalLink className="w-3 h-3 inline ml-1" />
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. VANTAGENS DE SISTEMAS WEB */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Acesso 24/7 de Qualquer Lugar</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Plataformas baseadas na nuvem. Acesse dados, relatórios e vendas pelo celular,
                tablet ou computador, sem necessidade de instalação local.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Segurança & Backups Contínuos</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Dados criptografados, controle de permissões por usuário e backups automáticos para
                garantir a total integridade das suas informações.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Escalabilidade Sob Demanda</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Sistemas projetados para crescer junto com seu negócio, suportando milhares de
                registros, pedidos e usuários simultâneos sem lentidão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Precisa de um Sistema Personalizado?
          </h2>
          <p className="text-sky-100 text-sm sm:text-base max-w-xl mx-auto">
            Ajudamos a mapear o problema operacional e desenhar a arquitetura ideal para otimizar
            sua empresa.
          </p>
          <div className="pt-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full px-8 shadow-md"
              >
                Fale Conosco via WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 text-sky-600" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
