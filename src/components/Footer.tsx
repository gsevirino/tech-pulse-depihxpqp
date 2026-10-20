import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, ArrowRight, Instagram, Linkedin } from 'lucide-react'
import { CONTATO_INFO, buildWhatsAppLink } from '@/data/techpulse'
import TechPulseLogo from '@/components/TechPulseLogo'

export default function Footer() {
  const whatsappUrl = buildWhatsAppLink('Olá! Gostaria de falar com a TechPulse.')

  return (
    <footer className="bg-[#0A0A0A] text-neutral-300 pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          {/* Coluna 1: Logo Oficial + Descrição */}
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="inline-block">
              <TechPulseLogo size="md" variant="dark" />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              Tech & Design Hub. Desenvolvimento de sites de alta conversão, identidade visual
              marcante, branding completo e sistemas sob medida para impulsionar seu negócio.
            </p>

            {/* Redes Sociais */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/techpulseofc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-orange-500 hover:text-white flex items-center justify-center text-neutral-400 transition"
                aria-label="Instagram TechPulse"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511972904309"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-orange-500 hover:text-white flex items-center justify-center text-neutral-400 transition"
                aria-label="WhatsApp TechPulse"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" /> Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sites"
                  className="hover:text-orange-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" /> Sites & Landing Pages
                </Link>
              </li>
              <li>
                <Link
                  to="/sistemas"
                  className="hover:text-orange-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" /> Sistemas Web
                </Link>
              </li>
              <li>
                <Link
                  to="/branding"
                  className="hover:text-orange-400 transition flex items-center gap-1.5 text-orange-400 font-semibold"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500" /> Branding & Marca
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-orange-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" /> Portfólio Completo
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="hover:text-orange-400 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600" /> Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos Oficiais */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contato</h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <a
                href={`mailto:${CONTATO_INFO.email}`}
                className="flex items-start gap-3 hover:text-orange-400 transition"
              >
                <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{CONTATO_INFO.email}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-orange-400 transition"
              >
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{CONTATO_INFO.telefoneFormatado}</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{CONTATO_INFO.cidade}</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <span>{CONTATO_INFO.horario}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} TECH PULSE | CNPJ: {CONTATO_INFO.cnpj} - Todos os direitos
            reservados.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/branding" className="hover:text-orange-400 transition">
              Branding
            </Link>
            <span>•</span>
            <Link to="/sites" className="hover:text-neutral-400 transition">
              Sites
            </Link>
            <span>•</span>
            <Link to="/sistemas" className="hover:text-neutral-400 transition">
              Sistemas
            </Link>
            <span>•</span>
            <Link to="/login" className="hover:text-neutral-400 transition">
              Acesso Restrito
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
