import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { buildWhatsAppLink } from '@/data/techpulse'
import { useAuth } from '@/contexts/AuthContext'

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

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Sites', path: '/sites' },
    { label: 'Sistemas', path: '/sistemas' },
    { label: 'Portfólio', path: '/portfolio' },
    { label: 'Contato', path: '/contato' },
  ]

  const orcamentoLink = buildWhatsAppLink(
    'Olá! Gostaria de solicitar um orçamento para meu projeto.',
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo TechPulse */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
              Tech<span className="text-sky-500">Pulse</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold -mt-1">
              Web & Sistemas
            </span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-sky-600 relative py-1 ${
                  isActive ? 'text-sky-600 font-semibold' : 'text-slate-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && (
            <Link to="/conta">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                Painel
              </Button>
            </Link>
          )}
          <a href={orcamentoLink} target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full px-5 shadow-sm shadow-sky-500/20 transition-all hover:shadow-md hover:scale-[1.02]"
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
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Lateral deslizante da direita */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-slate-950 text-white shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg text-white">
                    Tech<span className="text-sky-400">Pulse</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3 mt-6">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-base font-medium px-4 py-2.5 rounded-xl transition-colors ${
                        isActive
                          ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                          : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                href={orcamentoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl">
                  Solicitar Orçamento
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              {isAuthenticated ? (
                <Link to="/conta" className="w-full block">
                  <Button variant="outline" className="w-full border-slate-700 text-slate-200">
                    Acessar Painel
                  </Button>
                </Link>
              ) : (
                <Link to="/login" className="w-full block">
                  <Button variant="ghost" className="w-full text-slate-400 hover:text-white">
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
