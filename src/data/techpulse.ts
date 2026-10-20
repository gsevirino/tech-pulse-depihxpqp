export type PortfolioCategory = 'todos' | 'branding' | 'websites' | 'design-digital'

export interface PortfolioWorkItem {
  id: string
  titulo: string
  cliente?: string
  categoria: 'branding' | 'websites' | 'design-digital'
  categoriaLabel: string // 'LOGO | ID VISUAL', 'WEBSITES', 'DESIGN DIGITAL | GRÁFICOS'
  subtitulo?: string
  descricao?: string
  imagem: string // URL remota oficial da TechPulse ou screenshot
  url?: string // Link real para itens que possuem site
  destaques?: string[]
  ordem?: number
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'video'
}

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

/**
 * Portfólio REAL e Completo TechPulse
 * Extraído diretamente da página oficial https://techpulse.com.br/portifolio.html
 * Categorias originais do filtro:
 * - LOGO | ID VISUAL (branding)
 * - WEBSITES (websites / sistemas)
 * - DESIGN DIGITAL | GRÁFICOS (design-digital)
 */
export const PORTFOLIO_REAL_DATA: PortfolioWorkItem[] = [
  // --- BRANDING (LOGO | ID VISUAL) ---
  {
    id: 'tp-p1a',
    titulo: 'Ascensão — Moda Feminina',
    cliente: 'Ascensão Moda',
    categoria: 'branding',
    categoriaLabel: 'LOGO | ID VISUAL',
    subtitulo: 'Identidade Visual & Aplicações',
    descricao:
      'Criação de logotipo sofisticado, monograma exclusivo, padrão geométrico e aplicações em tags de roupas e embalagens.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/p1a.jpg',
    aspectRatio: 'portrait',
    ordem: 1,
  },
  {
    id: 'tp-p2b',
    titulo: 'Ateliê do Buquê — Floricultura & Eventos',
    cliente: 'Ateliê do Buquê',
    categoria: 'branding',
    categoriaLabel: 'LOGO | ID VISUAL',
    subtitulo: 'Identidade Visual Completa & Fachada',
    descricao:
      'Branding refinado, símbolo floral estilizado e manual de aplicações em fachadas metálicas, caixas e materiais de apresentação.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/p2b.jpg',
    aspectRatio: 'portrait',
    ordem: 2,
  },
  {
    id: 'tp-p3b',
    titulo: 'Agodoy — Serviços Médicos',
    cliente: 'Dr. Eduardo Godoy / Agodoy',
    categoria: 'branding',
    categoriaLabel: 'LOGO | ID VISUAL',
    subtitulo: 'Identidade Corporativa Médica & Uniformes',
    descricao:
      'Design de logo clínico e moderno, cartão de visitas, papelaria e aplicações em uniformes profissionais em verde e azul.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/p3b.jpg',
    aspectRatio: 'portrait',
    ordem: 3,
  },
  {
    id: 'tp-p7',
    titulo: 'MY MAKEUP — Cosméticos & Beleza',
    cliente: 'Ricardo Alexandre / MY MAKEUP',
    categoria: 'branding',
    categoriaLabel: 'LOGO | ID VISUAL',
    subtitulo: 'Naming, Logo & Linha Visual',
    descricao:
      'Desenvolvimento visual para marca premium de beleza: logotipo, embalagens de batons, sombras e tipografia editorial.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/p7.jpg',
    aspectRatio: 'portrait',
    ordem: 4,
  },
  {
    id: 'tp-p9',
    titulo: 'Lucas Martins — Arquitetura & Urbanismo',
    cliente: 'Lucas Martins',
    categoria: 'branding',
    categoriaLabel: 'LOGO | ID VISUAL',
    subtitulo: 'Identidade Corporativa de Arquitetura',
    descricao:
      'Conceituação minimalista de marca para escritório de arquitetura contemporânea e planejamento urbano.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/p9.jpg',
    aspectRatio: 'portrait',
    ordem: 5,
  },
  {
    id: 'tp-6',
    titulo: 'Val Trindade — Podologia & Saúde',
    cliente: 'Val Trindade',
    categoria: 'branding',
    categoriaLabel: 'LOGO | ID VISUAL',
    subtitulo: 'Identidade Visual & Papelaria',
    descricao:
      'Identidade delicada e confiável para clínica de podologia, transmitindo cuidado, higiene e atendimento humanizado.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/6.jpg',
    aspectRatio: 'square',
    ordem: 6,
  },
  {
    id: 'tp-7',
    titulo: 'Rosely Bolgenhagen — Psicologia & Psicanálise',
    cliente: 'Rosely Bolgenhagen',
    categoria: 'branding',
    categoriaLabel: 'LOGO | ID VISUAL',
    subtitulo: 'Marca Clínica & Identidade Visual',
    descricao:
      'Símbolo e paleta emocionalmente equilibrados para prática psicanalítica e consultório integrado de psicologia.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/7.jpg',
    aspectRatio: 'square',
    ordem: 7,
  },
  {
    id: 'tp-8',
    titulo: 'Studio Lumina — Estética Avançada',
    cliente: 'Studio Lumina',
    categoria: 'branding',
    categoriaLabel: 'LOGO | ID VISUAL',
    subtitulo: 'Identidade Visual & Aplicação',
    descricao:
      'Marca moderna e clean com visual sofisticado voltada ao público premium de estética facial e corporal.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/8.jpg',
    aspectRatio: 'square',
    ordem: 8,
  },
  {
    id: 'tp-9',
    titulo: 'Prime Imóveis — Consultoria Imobiliária',
    cliente: 'Prime Imóveis',
    categoria: 'branding',
    categoriaLabel: 'LOGO | ID VISUAL',
    subtitulo: 'Marca & Sinalização Corporativa',
    descricao:
      'Identidade visual de alto padrão para imobiliária focada em imóveis residenciais de médio e alto luxo.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/9.jpg',
    aspectRatio: 'square',
    ordem: 9,
  },
  {
    id: 'tp-10',
    titulo: 'Harmonia — Espaço Integrativo',
    cliente: 'Espaço Harmonia',
    categoria: 'branding',
    categoriaLabel: 'LOGO | ID VISUAL',
    subtitulo: 'Identidade de Marca & Papelaria',
    descricao:
      'Branding holístico que conecta natureza, equilíbrio e práticas terapêuticas com paleta orgânica.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/10.jpg',
    aspectRatio: 'square',
    ordem: 10,
  },

  // --- WEBSITES & SISTEMAS ---
  {
    id: 'tp-p1',
    titulo: 'Clínica Bolgenhagen — Saúde Integrada',
    cliente: 'Clínica Bolgenhagen',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Website Institucional & Agendamento',
    descricao:
      'Website responsivo moderno para clínica médica e terapêutica especializada em saúde integrada e agendamentos ágeis.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/p1.jpg',
    url: 'https://clinicabolgenhagen.com.br/',
    aspectRatio: 'portrait',
    ordem: 11,
  },
  {
    id: 'tp-p2',
    titulo: 'Psico Thais Melanda — Psicologia Clínica',
    cliente: 'Thais Melanda',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Website Profissional Acolhedor',
    descricao:
      'Plataforma acolhedora e elegante para consultas, agendamento de sessões e apresentação de abordagens terapêuticas.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/p2.jpg',
    url: 'https://psicothaismelanda.com.br/',
    aspectRatio: 'portrait',
    ordem: 12,
  },
  {
    id: 'tp-p3',
    titulo: 'Campanha IA Tecnologia — Inovação Digital',
    cliente: 'IG Tecnologia',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Landing Page de Alta Conversão',
    descricao:
      'Landing page com carregamento instantâneo focada em campanhas de tráfego e captação de leads qualificados em IA.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/p3.jpg',
    url: 'https://campanha.igatecnologia.com.br/',
    aspectRatio: 'portrait',
    ordem: 13,
  },
  {
    id: 'tp-site-torreslar',
    titulo: 'Torres Lar — Hospedagem & Imóveis',
    cliente: 'Torres Lar',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Portal de Acomodações & Reservas',
    descricao:
      'Apresentação imersiva de acomodações para locação por temporada e imóveis com integração rápida no WhatsApp.',
    imagem: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftorreslar.com.br%2F?w=1200&h=750',
    url: 'https://torreslar.com.br/',
    aspectRatio: 'landscape',
    ordem: 14,
  },
  {
    id: 'tp-site-agforros',
    titulo: 'AG Forros & Divisórias Corporativas',
    cliente: 'AG Forros',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Catálogo Institucional Online',
    descricao:
      'Portal institucional de serviços de forros e divisórias com solicitação direta de orçamento e portfólio de obras.',
    imagem: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.agforros.com.br%2F?w=1200&h=750',
    url: 'https://www.agforros.com.br/',
    aspectRatio: 'landscape',
    ordem: 15,
  },
  {
    id: 'tp-site-genice',
    titulo: 'Genice Terapeuta — Práticas Holísticas',
    cliente: 'Genice Terapeuta',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Website Intimista & Terapias',
    descricao:
      'Presença digital intimista e humanizada para terapias holísticas, alinhamento energético e bem-estar individual.',
    imagem:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fgeniceterapeuta.com.br%2F?w=1200&h=750',
    url: 'https://geniceterapeuta.com.br/',
    aspectRatio: 'landscape',
    ordem: 16,
  },
  {
    id: 'tp-site-sitio',
    titulo: 'Sítio do Tinho — Turismo Rural & Eventos',
    cliente: 'Sítio do Tinho',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Portal de Lazer & Hospedagem',
    descricao:
      'Portal encantador para turismo no campo, retiros familiares, hospedagem campestre e celebrações ao ar livre.',
    imagem: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsitiodotinho.com.br%2F?w=1200&h=750',
    url: 'https://sitiodotinho.com.br/',
    aspectRatio: 'landscape',
    ordem: 17,
  },
  {
    id: 'tp-site-swat',
    titulo: 'Equipe SWAT — Segurança Patrimonial',
    cliente: 'Equipe SWAT',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Portal Corporativo de Alta Segurança',
    descricao:
      'Portal corporativo seguro para equipe líder em segurança patrimonial, vigilância armada e grandes eventos.',
    imagem: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.equipeswat.com.br%2F?w=1200&h=750',
    url: 'https://www.equipeswat.com.br/',
    aspectRatio: 'landscape',
    ordem: 18,
  },
  {
    id: 'tp-site-sanali',
    titulo: 'Sanali — Soluções Corporativas',
    cliente: 'Sanali',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Website Corporativo & Autoridade',
    descricao:
      'Website institucional corporativo focado em autoridade de mercado, apresentação de serviços e solidez de marca.',
    imagem: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsanali.com.br%2F?w=1200&h=750',
    url: 'https://sanali.com.br/',
    aspectRatio: 'landscape',
    ordem: 19,
  },
  {
    id: 'tp-sis-techpet',
    titulo: 'TechPet — Plataforma para Daycare & Hotel Pet',
    cliente: 'TechPulse Software',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Sistema Web Especializado Pet',
    descricao:
      'Gestão integrada para creches caninas, banho e tosa e hotel pet. Ocupação em tempo real, diário pet e portal do tutor.',
    imagem:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftechpet.techpulse.com.br%2F?w=1200&h=750',
    url: 'https://techpet.techpulse.com.br/',
    destaques: ['Daycare & Hotel Pet', 'Portal do Tutor', 'Financeiro & Caixa'],
    aspectRatio: 'landscape',
    ordem: 20,
  },
  {
    id: 'tp-sis-catalogo',
    titulo: 'Catálogo Digital — Vendas no WhatsApp',
    cliente: 'TechPulse Software',
    categoria: 'websites',
    categoriaLabel: 'WEBSITES',
    subtitulo: 'Vitrine Online & Pedidos no Zap',
    descricao:
      'Vitrine interativa de produtos com carrinho ágil e envio do pedido formatado diretamente no WhatsApp da sua loja.',
    imagem:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcatalogodigital.techpulse.com.br%2F?w=1200&h=750',
    url: 'https://catalogodigital.techpulse.com.br/',
    destaques: ['Sem taxas por venda', 'Variações de produto', 'Carrinho WhatsApp'],
    aspectRatio: 'landscape',
    ordem: 21,
  },

  // --- DESIGN DIGITAL | GRÁFICOS ---
  {
    id: 'tp-12',
    titulo: 'Campanha Digital — Lançamento de Produto',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Social Media & Banners Publicitários',
    descricao:
      'Conjunto de artes digitais para feed, stories e anúncios de tráfego pago com linguagem visual de alto impacto.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/12.jpg',
    aspectRatio: 'square',
    ordem: 22,
  },
  {
    id: 'tp-20',
    titulo: 'Material Impresso & Embalagens Personalizadas',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Design Gráfico Editorial & Packaging',
    descricao:
      'Projetos de caixas, sacolas personalizadas e tags com acabamentos especiais em verniz e hot stamping.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/20.jpg',
    aspectRatio: 'square',
    ordem: 23,
  },
  {
    id: 'tp-30',
    titulo: 'Cartões de Visita & Papelaria Corporativa',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Design Gráfico Corporativo',
    descricao:
      'Composição gráfica para cartões com corte especial, pastas corporativas, timbrados e envelopes institucionais.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/30.jpg',
    aspectRatio: 'square',
    ordem: 24,
  },
  {
    id: 'tp-32',
    titulo: 'Campanha de Tráfego — Artes para Stories',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Criativos Digitais de Conversão',
    descricao:
      'Série de criativos com copy direta e gatilhos de conversão desenvolvidos sob medida para Meta Ads e TikTok.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/32.jpg',
    aspectRatio: 'portrait',
    ordem: 25,
  },
  {
    id: 'tp-33',
    titulo: 'Catálogo de Produtos & Apresentação Comercial',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Design Editorial & PDF Interativo',
    descricao:
      'Diagramação profissional de catálogo corporativo com links navegáveis para envio via WhatsApp e e-mail.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/33.jpg',
    aspectRatio: 'portrait',
    ordem: 26,
  },
  {
    id: 'tp-29',
    titulo: 'Artes para Redes Sociais — Feed Temático',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Harmonização & Social Media',
    descricao:
      'Feed organizado e padronizado com identidade cromática consistente para fortalecimento de autoridade no Instagram.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/29.jpg',
    aspectRatio: 'square',
    ordem: 27,
  },
  {
    id: 'tp-31',
    titulo: 'Manual de Marca & Guia de Aplicação',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Diretrizes Visuais de Marca',
    descricao:
      'Documento técnico completo com regras de espaçamento, tipografia, aplicações proibidas e códigos de cor (RGB/HEX/CMYK/Pantone).',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/31.jpg',
    aspectRatio: 'portrait',
    ordem: 28,
  },
  {
    id: 'tp-22',
    titulo: 'Cardápio Digital & Totem Promocional',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Comunicação Visual Comercial',
    descricao:
      'Layout de menu gastronômico com fotos apetitosas e tipografia limpa para leitura rápida no celular e no ponto físico.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/22.jpg',
    aspectRatio: 'square',
    ordem: 29,
  },
  {
    id: 'tp-23',
    titulo: 'Banners Digitais para E-commerce',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Comunicação Visual para Lojas Virtuais',
    descricao:
      'Banners promocionais para home de e-commerce, destaque de coleções sazonais e chamadas de frete grátis.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/23.jpg',
    aspectRatio: 'square',
    ordem: 30,
  },
  {
    id: 'tp-24',
    titulo: 'Post Carrossel Educativo para Instagram',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Marketing de Conteúdo Visual',
    descricao:
      'Sequência de slides com narrativa visual envolvente gerando alto índice de salvamentos e compartilhamentos.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/24.jpg',
    aspectRatio: 'square',
    ordem: 31,
  },
  {
    id: 'tp-25',
    titulo: 'Folder Dobrável Institucional',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Material Impresso Promocional',
    descricao:
      'Folder institucional de 3 dobras para apresentação em feiras de negócios, eventos e recepções corporativas.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/25.jpg',
    aspectRatio: 'square',
    ordem: 32,
  },
  {
    id: 'tp-26',
    titulo: 'Etiquetas & Rótulos de Produtos Artesanais',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Packaging & Rótulos',
    descricao:
      'Desenvolvimento de adesivos resistentes à umidade e rótulos com informações nutricionais e código de barras legível.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/26.jpg',
    aspectRatio: 'square',
    ordem: 33,
  },
  {
    id: 'tp-27',
    titulo: 'Banner Roll-up & Sinalização de Estande',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Comunicação Visual para Eventos',
    descricao:
      'Comunicação em grande formato com alta definição visual para feiras setoriais, palestras e conferências.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/27.jpg',
    aspectRatio: 'portrait',
    ordem: 34,
  },
  {
    id: 'tp-36',
    titulo: 'Flyer Digital & Divulgação de Inauguração',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Material Promocional Digital',
    descricao:
      'Arte de impacto para eventos e lançamento de novos pontos de venda com chamada direta para reserva e WhatsApp.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/36.jpg',
    aspectRatio: 'square',
    ordem: 35,
  },
  {
    id: 'tp-34',
    titulo: 'Apresentação Corporativa para Investidores',
    cliente: 'TechPulse Client',
    categoria: 'design-digital',
    categoriaLabel: 'DESIGN DIGITAL | GRÁFICOS',
    subtitulo: 'Pitch Deck & Design Institucional',
    descricao:
      'Slides profissionais para captação de recursos, apresentação de métricas e proposta comercial de alto nível.',
    imagem: 'https://techpulse.com.br/assets/images/portfolio/34.jpg',
    aspectRatio: 'square',
    ordem: 36,
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
    nome: 'Lais Carvalho',
    cargo_empresa: 'Fundadora Ella Bella Modas',
    texto:
      'Excelente trabalho! Ficaram lindas as etiquetas e de excelente qualidade. Sem contar com o atendimento super rápido sempre que precisamos!',
    ordem: 3,
  },
  {
    id: 'dep-4',
    nome: 'Gerson Martins',
    cargo_empresa: 'Fundador Manga Rosa',
    texto:
      'Amamos a criação do nosso logo! Ficou lindo! A combinação das cores com a marca ficaram perfeitas!',
    ordem: 4,
  },
  {
    id: 'dep-5',
    nome: 'Lucas Martins',
    cargo_empresa: 'Arquiteto Urbanista',
    texto:
      'Obrigado, trabalho incrível! Fiquei muito feliz! Sensacional o trabalho, parabéns mesmo!',
    ordem: 5,
  },
  {
    id: 'dep-6',
    nome: 'Val Trindade',
    cargo_empresa: 'Podóloga',
    texto:
      'Um excelente trabalho, um ótimo atendimento, o serviço é de primeira, me surpreendeu. Indico para todo mundo!',
    ordem: 6,
  },
]

export const CONTATO_INFO = {
  telefone: '+55 11 97290-4309',
  telefoneFormatado: '(11) 97290-4309',
  whatsappNumero: '5511972904309',
  email: 'contato@techpulse.com.br',
  cidade: 'São Paulo / SP',
  horario: 'Segunda a Sexta — 9h às 18h',
  cnpj: '46.576.395/0001-76',
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
