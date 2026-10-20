import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { buildWhatsAppLink } from '@/data/techpulse'
import { useAuth } from '@/contexts/AuthContext'
import TechPulseLogo from '@/components/TechPulseLogo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fechar menu mobile ao trocar de rota
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Ordem sugerida: Início, Sites, Sistemas, Branding, Portfólio, Contato
  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Sites', path: '/sites' },
    { label: 'Sistemas', path: '/sistemas' },
    { label: 'Branding', path: '/branding' },
    { label: 'Portfólio', path: '/portfolio' },
    { label: 'Contato', path: '/contato' },
  ]

  const orcamentoLink = buildWhatsAppLink(
    'Olá! Gostaria de solicitar um orçamento para meu projeto com a TechPulse.',
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-md border-b border-neutral-800 py-3'
          : 'bg-black/80 backdrop-blur-sm py-4 border-b border-neutral-900/50'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo Oficial TechPulse (anexado pelo usuário) */}
        <Link to="/" className="flex items-center group">
          <TechPulseLogo size="md" variant="dark" />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-orange-500 relative py-1 ${
                  isActive ? 'text-orange-500 font-bold' : 'text-neutral-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && (
            <Link to="/conta">
              <Button
                variant="ghost"
                size="sm"
                className="text-neutral-300 hover:text-white hover:bg-neutral-800"
              >
                Painel
              </Button>
            </Link>
          )}
          <a href={orcamentoLink} target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-5 shadow-sm shadow-orange-500/30 transition-all hover:shadow-md hover:scale-[1.03]"
              size="sm"
            >
              Orçamento
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Lateral deslizante da direita */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0A0A0A] text-white shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-neutral-800">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <TechPulseLogo size="sm" variant="dark" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2.5 mt-6">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-base font-medium px-4 py-2.5 rounded-xl transition-colors ${
                        isActive
                          ? 'bg-orange-500/15 text-orange-400 border border-orange-500/30 font-bold'
                          : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <a
                href={orcamentoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20">
                  Solicitar Orçamento
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              {isAuthenticated ? (
                <Link to="/conta" className="w-full block">
                  <Button
                    variant="outline"
                    className="w-full border-neutral-700 text-neutral-200 hover:bg-neutral-800"
                  >
                    Acessar Painel
                  </Button>
                </Link>
              ) : (
                <Link to="/login" className="w-full block">
                  <Button
                    variant="ghost"
                    className="w-full text-neutral-400 hover:text-white hover:bg-neutral-900"
                  >
                    Área Administrativa
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
