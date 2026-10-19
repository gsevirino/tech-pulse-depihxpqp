import React from 'react'
import { Link } from 'react-router-dom'
import {
  PawPrint,
  Calendar,
  Users,
  HeartPulse,
  DollarSign,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Smartphone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { buildWhatsAppLink } from '@/data/techpulse'

export default function TechPet() {
  const whatsappUrl = buildWhatsAppLink(
    'Olá! Gostaria de solicitar uma demonstração do sistema TechPet.',
  )

  const features = [
    {
      icon: Calendar,
      title: 'Agenda & Ocupação em Tempo Real',
      desc: 'Controle de vagas na creche canina, suítes de hotel pet e horários de banho e tosa sem conflitos de agendamento.',
    },
    {
      icon: Users,
      title: 'Cadastro de Clientes & Tutores',
      desc: 'Histórico completo de atendimentos, preferências de tosa, contatos de emergência e autorizações assinadas.',
    },
    {
      icon: PawPrint,
      title: 'Ficha Completa dos Pets',
      desc: 'Raça, peso, fotos, temperamento, sociabilidade com outros animais e histórico médico sempre acessíveis.',
    },
    {
      icon: HeartPulse,
      title: 'Registro de Cuidados & Diário',
      desc: 'Controle de medicação, horários de alimentação, vacinas e envio de relatórios e diário com fotos para os tutores.',
    },
    {
      icon: DollarSign,
      title: 'Financeiro & Fluxo de Caixa',
      desc: 'Fechamento de pacotes mensais, emissão de cobranças, controle de comissões de tosadores e entradas de balcão.',
    },
    {
      icon: Smartphone,
      title: 'Portal Exclusivo do Tutor',
      desc: 'Área onde o tutor acompanha reservas, atualizações do dia do pet, carteirinha de vacinação e pendências financeiras.',
    },
  ]

  const plans = [
    {
      nome: 'Essencial',
      preco: 'R$ 149',
      periodo: '/mês',
      desc: 'Ideal para banho e tosa e consultórios menores.',
      destaques: [
        'Até 150 pets cadastrados',
        'Agenda de serviços',
        'Controle de tutores',
        'Relatórios básicos',
      ],
    },
    {
      nome: 'Profissional',
      preco: 'R$ 249',
      periodo: '/mês',
      popular: true,
      desc: 'O mais escolhido por creches e centros de estética pet.',
      destaques: [
        'Pets ilimitados',
        'Módulo Daycare & Creche',
        'Gestão financeira e caixa',
        'Portal do tutor e diário',
        'Suporte prioritário',
      ],
    },
    {
      nome: 'Escala',
      preco: 'R$ 399',
      periodo: '/mês',
      desc: 'Para grandes hotéis caninos, franquias e redes pet.',
      destaques: [
        'Múltiplas unidades/filiais',
        'Módulo Hotel pet completo',
        'Comissão avançada de equipe',
        'Integrações e API',
        'Gerente de conta dedicado',
      ],
    },
  ]

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-8">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-400/15 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-4">
            <Link to="/" className="hover:text-sky-600">
              Início
            </Link>
            <span>/</span>
            <Link to="/sistemas" className="hover:text-sky-600">
              Sistemas
            </Link>
            <span>/</span>
            <span className="text-emerald-600 font-bold">TechPet</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold">
                <PawPrint className="w-3.5 h-3.5 text-emerald-600" />
                Gestão Especializada para o Mercado Pet
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
                TechPet — Gestão para Creches Caninas, Hotel Pet e Banho e Tosa
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A plataforma completa para organizar sua rotina operacional: ocupação em tempo real,
                fichas médicas de pets, financeiro integrado e portal exclusivo para os tutores.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 shadow-md"
                  >
                    Solicitar Demonstração Grátis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>

                <a
                  href="https://techpet.techpulse.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full px-6"
                  >
                    Acessar Plataforma Real <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Teste grátis por 30 dias sem necessidade de cartão de crédito</span>
              </div>
            </div>

            {/* Mockup Ilustrativo TechPet */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 p-4 shadow-2xl border border-slate-800 text-white space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <PawPrint className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-sm">TechPet Dashboard</span>
                  </div>
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                    38 pets no daycare hoje
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-slate-400">Ocupação Hotel</div>
                    <div className="text-xl font-bold text-emerald-400">92%</div>
                    <div className="text-[10px] text-slate-500 mt-1">11/12 suítes ocupadas</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-slate-400">Banho & Tosa</div>
                    <div className="text-xl font-bold text-sky-400">18 agendados</div>
                    <div className="text-[10px] text-slate-500 mt-1">4 em andamento</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2 text-xs">
                  <div className="text-slate-300 font-semibold flex items-center justify-between">
                    <span>Próximas Atividades</span>
                    <span className="text-[10px] text-slate-400">Hoje</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>Thor (Golden) — Medicação 14h</span>
                    <span className="text-amber-400">Pendente</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>Mel (Poodle) — Tosa higiênica 15h</span>
                    <span className="text-emerald-400">Confirmado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FUNCIONALIDADES (6 CARDS) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Recursos Completos
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Tudo o que seu Espaço Pet Precisa em Um Só Lugar
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Desenvolvido ouvindo veterinários, tosadores e proprietários de creches de cães.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={idx}
                className="border-slate-200/80 hover:border-emerald-300 hover:shadow-lg transition"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* 3. PLANOS & PREÇOS REAIS */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Planos Acessíveis e Transparentes
          </h2>
          <p className="text-sm text-slate-600">
            Escolha o pacote ideal para o porte atual do seu negócio pet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 bg-white border flex flex-col justify-between transition ${
                p.popular
                  ? 'border-emerald-500 shadow-xl ring-2 ring-emerald-500/20 relative'
                  : 'border-slate-200/80 shadow-sm'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                  Mais Popular
                </span>
              )}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">{p.nome}</h3>
                <p className="text-xs text-slate-600">{p.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">{p.preco}</span>
                  <span className="text-xs text-slate-500">{p.periodo}</span>
                </div>
                <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  {p.destaques.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    className={`w-full rounded-xl font-semibold ${
                      p.popular
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    Testar 30 Dias Grátis
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Quer o TechPet no seu Negócio?</h2>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto">
            Agende uma demonstração prática de 15 minutos e veja como é simples gerenciar creche,
            hotel e estética canina.
          </p>
          <div className="pt-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full px-8 shadow-md"
              >
                Solicitar Demonstração via WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 text-emerald-600" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
