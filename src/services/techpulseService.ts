import pb from '@/lib/pocketbase/client'
import {
  SITES_DATA,
  SISTEMAS_DATA,
  DEPOIMENTOS_DATA,
  SiteItem,
  SistemaItem,
  DepoimentoItem,
  PortfolioWorkItem,
  PORTFOLIO_REAL_DATA,
  buildContactFormWhatsAppMessage,
  buildWhatsAppLink,
} from '@/data/techpulse'

export interface MensagemContatoInput {
  nome: string
  email: string
  telefone: string
  mensagem: string
  assunto?: string
}

export async function fetchFullPortfolio(): Promise<PortfolioWorkItem[]> {
  try {
    const records = await pb.collection('portfolio_completo').getFullList({
      sort: 'ordem,created',
      requestKey: null,
    })
    if (records && records.length > 0) {
      return records.map((r) => ({
        id: r.id,
        titulo: (r.titulo as string) || (r.nome as string),
        cliente: r.cliente as string,
        categoria: (r.categoria as 'branding' | 'websites' | 'design-digital') || 'websites',
        categoriaLabel: (r.categoriaLabel as string) || 'PROJETO',
        subtitulo: r.subtitulo as string,
        descricao: (r.descricao as string) || '',
        imagem: (r.imagem as string) || '',
        url: (r.url as string) || undefined,
        destaques: Array.isArray(r.destaques) ? (r.destaques as string[]) : undefined,
        ordem: typeof r.ordem === 'number' ? r.ordem : undefined,
      }))
    }
  } catch (err) {
    console.warn('Usando catálogo estático completo do portfólio:', err)
  }
  return PORTFOLIO_REAL_DATA
}

export async function fetchSitesPortfolio(): Promise<SiteItem[]> {
  try {
    const records = await pb.collection('sites_portfolio').getFullList({
      sort: 'ordem,created',
      requestKey: null,
    })
    if (records && records.length > 0) {
      return records.map((r) => ({
        id: r.id,
        nome: r.nome as string,
        categoria: r.categoria as string,
        descricao: (r.descricao as string) || '',
        url: r.url as string,
        ordem: typeof r.ordem === 'number' ? r.ordem : undefined,
      }))
    }
  } catch (err) {
    console.warn('Usando dados estáticos de sites como fallback:', err)
  }
  return SITES_DATA
}

export async function fetchSistemasPortfolio(): Promise<SistemaItem[]> {
  try {
    const records = await pb.collection('sistemas_portfolio').getFullList({
      sort: 'ordem,created',
      requestKey: null,
    })
    if (records && records.length > 0) {
      return records.map((r) => {
        const fallback = SISTEMAS_DATA.find((s) => s.slug === r.slug)
        return {
          id: r.id,
          slug: r.slug as string,
          nome: r.nome as string,
          categoria: r.categoria as string,
          descricao: (r.descricao as string) || fallback?.descricao || '',
          url: (r.url as string) || fallback?.url || '',
          destaques: fallback?.destaques || [],
          ordem: typeof r.ordem === 'number' ? r.ordem : undefined,
        }
      })
    }
  } catch (err) {
    console.warn('Usando dados estáticos de sistemas como fallback:', err)
  }
  return SISTEMAS_DATA
}

export async function fetchDepoimentos(): Promise<DepoimentoItem[]> {
  try {
    const records = await pb.collection('depoimentos').getFullList({
      sort: 'ordem,created',
      requestKey: null,
    })
    if (records && records.length > 0) {
      return records.map((r) => ({
        id: r.id,
        nome: r.nome as string,
        cargo_empresa: r.cargo_empresa as string,
        texto: r.texto as string,
        ordem: typeof r.ordem === 'number' ? r.ordem : undefined,
      }))
    }
  } catch (err) {
    console.warn('Usando dados estáticos de depoimentos como fallback:', err)
  }
  return DEPOIMENTOS_DATA
}

export async function enviarMensagemContato(dados: MensagemContatoInput): Promise<{
  whatsappUrl: string
  savedOnBackend: boolean
}> {
  const whatsappMsg = buildContactFormWhatsAppMessage(dados)
  const whatsappUrl = buildWhatsAppLink(whatsappMsg)

  let savedOnBackend = false
  try {
    // 1. Tentar salvar diretamente na coleção 'mensagens' (createRule aberta para visitantes)
    await pb.collection('mensagens').create({
      nome: dados.nome,
      email: dados.email,
      telefone: dados.telefone,
      mensagem: dados.mensagem,
    })
    savedOnBackend = true
  } catch {
    try {
      // 2. Fallback via hook customizado se configurado
      const base = import.meta.env.VITE_POCKETBASE_URL || ''
      if (base) {
        await fetch(`${base}/backend/v1/contato`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados),
        })
        savedOnBackend = true
      }
    } catch (hookErr) {
      console.warn('Falha ao persistir no backend, direcionando para WhatsApp:', hookErr)
    }
  }

  return { whatsappUrl, savedOnBackend }
}
