migrate(
  (app) => {
    // 1. Seed admin user: gislaine.sevirino@gmail.com
    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'gislaine.sevirino@gmail.com')
    } catch (_) {
      const adminRecord = new Record(users)
      adminRecord.setEmail('gislaine.sevirino@gmail.com')
      adminRecord.setPassword('Skip@Pass')
      adminRecord.setVerified(true)
      adminRecord.set('name', 'Gislaine Sevirino')
      app.save(adminRecord)
    }

    // 2. Seed sites_portfolio
    const sitesCol = app.findCollectionByNameOrId('sites_portfolio')
    const initialSites = [
      {
        nome: 'Clínica Bolgenhagen',
        categoria: 'Saúde & Clínica',
        descricao: 'Website institucional moderno para clínica médica e terapêutica especializada.',
        url: 'https://clinicabolgenhagen.com.br/',
        ordem: 1,
      },
      {
        nome: 'Psico Thais Melanda',
        categoria: 'Psicologia',
        descricao:
          'Plataforma profissional e acolhedora para agendamentos e apresentação de serviços de psicologia clínica.',
        url: 'https://psicothaismelanda.com.br/',
        ordem: 2,
      },
      {
        nome: 'Campanha IA Tecnologia',
        categoria: 'Campanha / Landing Page',
        descricao:
          'Landing page de alta conversão focada em campanhas estratégicas de tecnologia e inteligência artificial.',
        url: 'https://campanha.igatecnologia.com.br/',
        ordem: 3,
      },
      {
        nome: 'Torres Lar',
        categoria: 'Imobiliário / Hospitalidade',
        descricao:
          'Apresentação sofisticada de imóveis e acomodações com experiência visual atrativa para hóspedes e clientes.',
        url: 'https://torreslar.com.br/',
        ordem: 4,
      },
      {
        nome: 'AG Forros',
        categoria: 'Forros & Divisórias',
        descricao:
          'Site comercial focado em produtos e soluções corporativas e residenciais em forros acústicos e divisórias.',
        url: 'https://www.agforros.com.br/',
        ordem: 5,
      },
      {
        nome: 'Genice Terapeuta',
        categoria: 'Terapia & Bem-estar',
        descricao:
          'Página de apresentação profissional e agendamento para atendimentos integrativos e terapias personalizadas.',
        url: 'https://geniceterapeuta.com.br/',
        ordem: 6,
      },
      {
        nome: 'Sítio do Tinho',
        categoria: 'Turismo Rural & Eventos',
        descricao:
          'Portal receptivo para turismo rural, hospedagens e eventos no campo com fotos e formulário de reserva.',
        url: 'https://sitiodotinho.com.br/',
        ordem: 7,
      },
      {
        nome: 'Equipe SWAT',
        categoria: 'Segurança & Eventos',
        descricao:
          'Solução digital robusta para empresa líder em segurança patrimonial e apoio operacional a eventos de grande porte.',
        url: 'https://www.equipeswat.com.br/',
        ordem: 8,
      },
      {
        nome: 'Sanali',
        categoria: 'Empresarial / Corporativo',
        descricao:
          'Presença digital corporativa de alto impacto para apresentação institucional de produtos e serviços.',
        url: 'https://sanali.com.br/',
        ordem: 9,
      },
    ]

    for (const s of initialSites) {
      try {
        app.findFirstRecordByData('sites_portfolio', 'url', s.url)
      } catch (_) {
        const rec = new Record(sitesCol)
        rec.set('nome', s.nome)
        rec.set('categoria', s.categoria)
        rec.set('descricao', s.descricao)
        rec.set('url', s.url)
        rec.set('ordem', s.ordem)
        app.save(rec)
      }
    }

    // 3. Seed sistemas_portfolio
    const sistemasCol = app.findCollectionByNameOrId('sistemas_portfolio')
    const initialSistemas = [
      {
        slug: 'techpet',
        nome: 'TechPet',
        categoria: 'Gestão Pet & Veterinária',
        descricao:
          'Sistema completo para creches caninas, hotel pet e banho e tosa. Agenda, ficha de tutores, diário pet e financeiro.',
        url: 'https://techpet.techpulse.com.br/',
        ordem: 1,
      },
      {
        slug: 'catalogo-digital',
        nome: 'Catálogo Digital',
        categoria: 'Vitrine & Pedidos WhatsApp',
        descricao:
          'Vitrine de produtos dinâmica com variações, adicionais e carrinho inteligente que gera pedido direto no WhatsApp.',
        url: 'https://catalogodigital.techpulse.com.br/',
        ordem: 2,
      },
      {
        slug: 'vhsys',
        nome: 'Sistema vhsys',
        categoria: 'Gestão Empresarial & ERP',
        descricao:
          'Implementação e suporte vhsys pela TechPulse. Controle de estoque, financeiro, vendas, emissão de NF-e e relatórios.',
        url: '',
        ordem: 3,
      },
    ]

    for (const sis of initialSistemas) {
      try {
        app.findFirstRecordByData('sistemas_portfolio', 'slug', sis.slug)
      } catch (_) {
        const rec = new Record(sistemasCol)
        rec.set('slug', sis.slug)
        rec.set('nome', sis.nome)
        rec.set('categoria', sis.categoria)
        rec.set('descricao', sis.descricao)
        rec.set('url', sis.url)
        rec.set('ordem', sis.ordem)
        app.save(rec)
      }
    }

    // 4. Seed depoimentos
    const depoimentosCol = app.findCollectionByNameOrId('depoimentos')
    const initialDepoimentos = [
      {
        nome: 'Ricardo Alexandre',
        cargo_empresa: 'Fundador MY MAKEUP',
        texto:
          'Muitíssimo obrigado e parabéns pelo perfeccionismo. Ficou muito além do que eu imaginava, ficou muito profissional!',
        ordem: 1,
      },
      {
        nome: 'Rosely Bolgenhagen',
        cargo_empresa: 'Psicóloga e Psicanalista',
        texto:
          'Muito Obrigada, pela destreza, eficácia do trabalho prestado, pela dedicação o qual o objetivo foi alcançado!',
        ordem: 2,
      },
      {
        nome: 'Val Trindade',
        cargo_empresa: 'Podóloga Especialista',
        texto:
          'Um excelente trabalho, um ótimo atendimento, o serviço é de primeira, me surpreendeu. Indico para todo mundo!',
        ordem: 3,
      },
    ]

    for (const dep of initialDepoimentos) {
      try {
        app.findFirstRecordByData('depoimentos', 'nome', dep.nome)
      } catch (_) {
        const rec = new Record(depoimentosCol)
        rec.set('nome', dep.nome)
        rec.set('cargo_empresa', dep.cargo_empresa)
        rec.set('texto', dep.texto)
        rec.set('ordem', dep.ordem)
        app.save(rec)
      }
    }
  },
  (app) => {
    // rollback opcional em caso de revert
  },
)
