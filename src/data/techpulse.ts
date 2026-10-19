export interface SiteItem {
  id: string
  nome: string
  categoria: string
  descricao: string
  url: string
  ordem?: number
}

export interface SistemaItem {
  id: string
  slug: 'techpet' | 'catalogo-digital' | 'vhsys' | string
  nome: string
  categoria: string
  descricao: string
  url?: string
  destaques?: string[]
  ordem?: number
}

export interface DepoimentoItem {
  id: string
  nome: string
  cargo_empresa: string
  texto: string
  ordem?: number
}

export const SITES_DATA: SiteItem[] = [
  {
    id: 'site-1',
    nome: 'Clínica Bolgenhagen',
    categoria: 'Saúde',
    descricao:
      'Website institucional moderno para clínica médica e terapêutica especializada em saúde integrada.',
    url: 'https://clinicabolgenhagen.com.br/',
    ordem: 1,
  },
  {
    id: 'site-2',
    nome: 'Psico Thais Melanda',
    categoria: 'Psicologia',
    descricao:
      'Plataforma acolhedora e elegante para agendamentos e apresentação de serviços de psicologia clínica.',
    url: 'https://psicothaismelanda.com.br/',
    ordem: 2,
  },
  {
    id: 'site-3',
    nome: 'Campanha IA Tecnologia',
    categoria: 'Campanha/Landing',
    descricao:
      'Landing page focada em conversão para campanhas estratégicas de inovação e inteligência artificial.',
    url: 'https://campanha.igatecnologia.com.br/',
    ordem: 3,
  },
  {
    id: 'site-4',
    nome: 'Torres Lar',
    categoria: 'Imobiliário/Hospitalidade',
    descricao: 'Apresentação visual imersiva de acomodações e imóveis com reservas e contato ágil.',
    url: 'https://torreslar.com.br/',
    ordem: 4,
  },
  {
    id: 'site-5',
    nome: 'AG Forros',
    categoria: 'Forros e divisórias',
    descricao:
      'Catálogo de soluções corporativas e residenciais com atendimento direto para orçamentos.',
    url: 'https://www.agforros.com.br/',
    ordem: 5,
  },
  {
    id: 'site-6',
    nome: 'Genice Terapeuta',
    categoria: 'Terapia',
    descricao:
      'Presença digital intimista e humanizada para terapias holísticas e bem-estar individual.',
    url: 'https://geniceterapeuta.com.br/',
    ordem: 6,
  },
  {
    id: 'site-7',
    nome: 'Sítio do Tinho',
    categoria: 'Turismo rural/Eventos',
    descricao:
      'Portal encantador para turismo no campo, retiros, hospedagem e celebrações ao ar livre.',
    url: 'https://sitiodotinho.com.br/',
    ordem: 7,
  },
  {
    id: 'site-8',
    nome: 'Equipe SWAT',
    categoria: 'Segurança/Eventos',
    descricao:
      'Portal corporativo seguro para equipe líder em segurança patrimonial e grandes eventos.',
    url: 'https://www.equipeswat.com.br/',
    ordem: 8,
  },
  {
    id: 'site-9',
    nome: 'Sanali',
    categoria: 'Empresa',
    descricao:
      'Website institucional corporativo focado em autoridade de mercado e solidez de marca.',
    url: 'https://sanali.com.br/',
    ordem: 9,
  },
]

export const SISTEMAS_DATA: SistemaItem[] = [
  {
    id: 'sis-1',
    slug: 'techpet',
    nome: 'TechPet',
    categoria: 'Gestão Pet & Veterinária',
    descricao:
      'Gestão completa para creches caninas, hotel pet e banho e tosa. Agenda, ficha de tutores, diário pet e controle financeiro.',
    url: 'https://techpet.techpulse.com.br/',
    destaques: [
      'Agenda e ocupação em tempo real',
      'Ficha completa de pets e tutores',
      'Registro de cuidados, vacinas e medicação',
      'Controle financeiro e fluxo de caixa',
      'Portal exclusivo do tutor',
      'Planos a partir de R$ 149/mês (30 dias grátis)',
    ],
    ordem: 1,
  },
  {
    id: 'sis-2',
    slug: 'catalogo-digital',
    nome: 'Catálogo Digital',
    categoria: 'Vitrine & Pedidos WhatsApp',
    descricao:
      'Vitrine de produtos com pedidos organizados diretamente no WhatsApp. Rápido, intuitivo e sem taxas sobre vendas.',
    url: 'https://catalogodigital.techpulse.com.br/',
    destaques: [
      'Vitrine com a identidade da sua marca',
      'Variações de tamanho, cor e opcionais',
      'Carrinho que gera pedido pronto no WhatsApp',
      'Painel ágil para cadastro e fotos de itens',
      'Sem cobrança de porcentagem por pedido',
      'Planos a partir de R$ 29,90/mês',
    ],
    ordem: 2,
  },
  {
    id: 'sis-3',
    slug: 'vhsys',
    nome: 'Sistema vhsys',
    categoria: 'Gestão Empresarial & ERP',
    descricao:
      'Implementação e suporte especializado vhsys pela TechPulse. Gestão completa de estoque, financeiro, vendas e notas fiscais.',
    url: '',
    destaques: [
      '+30 anos de mercado e confiabilidade',
      '+22 milhões de notas fiscais emitidas',
      '+60 bilhões de reais movimentados',
      '+30 integrações com e-commerces e bancos',
      'Emissão ágil de NF-e, NFS-e e NFC-e',
      'Treinamento e suporte dedicado TechPulse',
    ],
    ordem: 3,
  },
]

export const DEPOIMENTOS_DATA: DepoimentoItem[] = [
  {
    id: 'dep-1',
    nome: 'Ricardo Alexandre',
    cargo_empresa: 'Fundador MY MAKEUP',
    texto:
      'Muitíssimo obrigado e parabéns pelo perfeccionismo. Ficou muito além do que eu imaginava, ficou muito profissional!',
    ordem: 1,
  },
  {
    id: 'dep-2',
    nome: 'Rosely Bolgenhagen',
    cargo_empresa: 'Psicóloga e Psicanalista',
    texto:
      'Muito Obrigada, pela destreza, eficácia do trabalho prestado, pela dedicação o qual o objetivo foi alcançado!',
    ordem: 2,
  },
  {
    id: 'dep-3',
    nome: 'Val Trindade',
    cargo_empresa: 'Podóloga',
    texto:
      'Um excelente trabalho, um ótimo atendimento, o serviço é de primeira, me surpreendeu. Indico para todo mundo!',
    ordem: 3,
  },
]

export const CONTATO_INFO = {
  telefone: '+55 11 97290-4309',
  telefoneFormatado: '(11) 97290-4309',
  whatsappNumero: '5511972904309',
  email: 'contato@techpulse.com.br',
  cidade: 'São Paulo / SP',
  horario: 'Segunda a Sexta — 9h às 18h',
}

export function buildWhatsAppLink(mensagemPersonalizada?: string): string {
  const text =
    mensagemPersonalizada && mensagemPersonalizada.trim().length > 0
      ? mensagemPersonalizada
      : 'Olá! Gostaria de solicitar um orçamento para o meu projeto com a TechPulse.'
  return `https://wa.me/${CONTATO_INFO.whatsappNumero}?text=${encodeURIComponent(text)}`
}

export function buildContactFormWhatsAppMessage(dados: {
  nome: string
  email: string
  telefone: string
  mensagem: string
  assunto?: string
}): string {
  const lines = [
    `*Novo Contato via Site TechPulse*`,
    dados.assunto ? `*Assunto:* ${dados.assunto}` : null,
    `*Nome:* ${dados.nome}`,
    `*E-mail:* ${dados.email}`,
    `*Telefone:* ${dados.telefone}`,
    ``,
    `*Mensagem:*`,
    dados.mensagem,
  ].filter(Boolean)

  return lines.join('\n')
}

export function getScreenshotUrl(targetUrl: string): string {
  if (!targetUrl || targetUrl.trim() === '') return ''
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(targetUrl)}?w=1200&h=750`
}
