import React from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard,
  Boxes,
  BadgeDollarSign,
  FileCheck2,
  Users2,
  LineChart,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Headphones,
  Award,
  Layers,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { buildWhatsAppLink } from '@/data/techpulse'

export default function Vhsys() {
  const whatsappUrl = buildWhatsAppLink(
    'Olá! Gostaria de informações sobre a implementação e suporte do sistema vhsys com a TechPulse.',
  )

  const features = [
    {
      icon: Boxes,
      title: 'Controle de Estoque Inteligente',
      desc: 'Gestão de entradas, saídas, grade de produtos, custo médio e alertas de estoque mínimo para nunca perder vendas.',
    },
    {
      icon: BadgeDollarSign,
      title: 'Gestão Financeira & Fluxo de Caixa',
      desc: 'Contas a pagar e receber, conciliação bancária, relatórios DRE e controle rigoroso de fluxo de caixa em tempo real.',
    },
    {
      icon: FileCheck2,
      title: 'Emissão Rápida de Notas Fiscais',
      desc: 'Emissão descomplicada de NF-e, NFS-e, NFC-e e envio automático dos XMLs e DANFEs para seu cliente e contador.',
    },
    {
      icon: Users2,
      title: 'Gestão Comercial & CRM de Clientes',
      desc: 'Cadastro completo de clientes e fornecedores, histórico de compras, orçamentos e pedidos de venda integrados.',
    },
    {
      icon: LineChart,
      title: 'Relatórios Gerenciais Avançados',
      desc: 'Dashboards visuais com indicadores de faturamento, margem de lucro, curva ABC de produtos e metas de vendedores.',
    },
    {
      icon: Headphones,
      title: 'Implementação & Suporte TechPulse',
      desc: 'Parametrização do sistema pela nossa equipe, migração de dados e treinamento especializado para todo o seu time.',
    },
  ]

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-8">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-400/15 blur-[100px] rounded-full pointer-events-none -z-10" />

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
            <span className="text-indigo-600 font-bold">vhsys</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
                <LayoutDashboard className="w-3.5 h-3.5 text-indigo-600" />
                Implementação & Suporte Especializado TechPulse
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
                Sistema vhsys — Gestão Empresarial Completa para sua Empresa
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Centralize estoque, finanças, emissão fiscal e força de vendas em um único ERP em
                nuvem. A TechPulse cuida de toda a implantação, migração de dados e treinamento do
                seu time.
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
                    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 shadow-md"
                  >
                    Falar com Especialista vhsys
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              {/* Indicadores reais de social proof */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">+30 anos</div>
                  <div className="text-[11px] text-slate-500">De mercado</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">+22 mi</div>
                  <div className="text-[11px] text-slate-500">Notas emitidas</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">R$ 60 bi</div>
                  <div className="text-[11px] text-slate-500">Movimentados</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">+30</div>
                  <div className="text-[11px] text-slate-500">Integrações</div>
                </div>
              </div>
            </div>

            {/* Mockup vhsys */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 p-4 shadow-2xl border border-slate-800 text-white space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="w-5 h-5 text-indigo-400" />
                    <span className="font-bold text-sm">ERP Empresarial vhsys</span>
                  </div>
                  <span className="text-[11px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">
                    Sincronizado
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-slate-400">Faturamento Mensal</div>
                    <div className="text-xl font-bold text-emerald-400">R$ 142.850</div>
                    <div className="text-[10px] text-emerald-400 mt-1">+18% vs mês anterior</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-slate-400">Notas Fiscais</div>
                    <div className="text-xl font-bold text-sky-400">428 emitidas</div>
                    <div className="text-[10px] text-slate-400 mt-1">100% transmitidas</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2 text-xs">
                  <div className="text-slate-300 font-semibold flex items-center justify-between">
                    <span>Módulos Ativos</span>
                    <span className="text-[10px] text-indigo-400">TechPulse Suporte</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] text-slate-300">
                    <span className="p-1 rounded bg-slate-900">Vendas</span>
                    <span className="p-1 rounded bg-slate-900">Estoque</span>
                    <span className="p-1 rounded bg-slate-900">Financeiro</span>
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
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Poder de Gestão
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Controle Total da sua Operação em Uma Plataforma
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A solução definitiva para micro, pequenas e médias empresas ganharem agilidade e
            conformidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={idx}
                className="border-slate-200/80 hover:border-indigo-300 hover:shadow-lg transition"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
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

      {/* 3. CTA FINAL */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-sky-600 text-white p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Otimize a Gestão da sua Empresa com o vhsys
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base max-w-xl mx-auto">
            Converse com nossa equipe para entender como implementar o ERP ideal para sua operação
            sem interrupções.
          </p>
          <div className="pt-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full px-8 shadow-md"
              >
                Solicitar Demonstração via WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 text-indigo-600" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
