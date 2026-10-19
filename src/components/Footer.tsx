import React from 'react'
import { Link } from 'react-router-dom'
import {
  Activity,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Instagram,
  Linkedin,
  Github,
} from 'lucide-react'
import { CONTATO_INFO, buildWhatsAppLink } from '@/data/techpulse'

export default function Footer() {
  const whatsappUrl = buildWhatsAppLink('Olá! Gostaria de falar com a TechPulse.')

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">
          {/* Coluna 1: Logo + Descrição */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Activity className="w-6 h-6 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Tech<span className="text-sky-400">Pulse</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold -mt-1">
                  Web & Sistemas
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Desenvolvimento de sites de alta conversão, e-commerces, landing pages e sistemas web
              sob medida. Transformamos ideias em plataformas digitais seguras, rápidas e modernas.
            </p>
            {/* Redes Sociais */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white flex items-center justify-center text-slate-400 transition"
                aria-label="Instagram TechPulse"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white flex items-center justify-center text-slate-400 transition"
                aria-label="LinkedIn TechPulse"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white flex items-center justify-center text-slate-400 transition"
                aria-label="GitHub TechPulse"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-sky-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sites"
                  className="hover:text-sky-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> Desenvolvimento de Sites
                </Link>
              </li>
              <li>
                <Link
                  to="/sistemas"
                  className="hover:text-sky-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> Sistemas Web Sob Medida
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-sky-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> Portfólio de Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="hover:text-sky-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> Fale Conosco / Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos Oficiais */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contatos</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href={`mailto:${CONTATO_INFO.email}`}
                className="flex items-start gap-3 hover:text-sky-400 transition"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{CONTATO_INFO.email}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-emerald-400 transition"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{CONTATO_INFO.telefoneFormatado}</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{CONTATO_INFO.cidade}</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{CONTATO_INFO.horario}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2025 TechPulse. Todos os direitos reservados. TECH PULSE LTDA.</div>
          <div className="flex items-center gap-4">
            <Link to="/sites" className="hover:text-slate-400 transition">
              Sites
            </Link>
            <span>•</span>
            <Link to="/sistemas" className="hover:text-slate-400 transition">
              Sistemas
            </Link>
            <span>•</span>
            <Link to="/login" className="hover:text-slate-400 transition">
              Acesso Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
