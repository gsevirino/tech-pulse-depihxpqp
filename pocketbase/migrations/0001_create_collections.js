migrate(
  (app) => {
    // 1. Coleção sites_portfolio
    const sitesPortfolio = new Collection({
      name: 'sites_portfolio',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'nome', type: 'text', required: true },
        { name: 'categoria', type: 'text', required: true },
        { name: 'descricao', type: 'text' },
        { name: 'url', type: 'url', required: true },
        { name: 'ordem', type: 'number' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(sitesPortfolio)

    // 2. Coleção sistemas_portfolio
    const sistemasPortfolio = new Collection({
      name: 'sistemas_portfolio',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'slug', type: 'text', required: true },
        { name: 'nome', type: 'text', required: true },
        { name: 'categoria', type: 'text', required: true },
        { name: 'descricao', type: 'text' },
        { name: 'url', type: 'text' },
        { name: 'ordem', type: 'number' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE UNIQUE INDEX idx_sistemas_slug ON sistemas_portfolio (slug)'],
    })
    app.save(sistemasPortfolio)

    // 3. Coleção depoimentos
    const depoimentos = new Collection({
      name: 'depoimentos',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'nome', type: 'text', required: true },
        { name: 'cargo_empresa', type: 'text', required: true },
        { name: 'texto', type: 'text', required: true },
        { name: 'ordem', type: 'number' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(depoimentos)

    // 4. Coleção mensagens (mensagens de contato recebidas)
    const mensagens = new Collection({
      name: 'mensagens',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: '', // Qualquer visitante pode criar registro ao submeter contato
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'nome', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'telefone', type: 'text', required: true },
        { name: 'mensagem', type: 'text', required: true },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(mensagens)
  },
  (app) => {
    try {
      const col4 = app.findCollectionByNameOrId('mensagens')
      app.delete(col4)
    } catch (_) {}
    try {
      const col3 = app.findCollectionByNameOrId('depoimentos')
      app.delete(col3)
    } catch (_) {}
    try {
      const col2 = app.findCollectionByNameOrId('sistemas_portfolio')
      app.delete(col2)
    } catch (_) {}
    try {
      const col1 = app.findCollectionByNameOrId('sites_portfolio')
      app.delete(col1)
    } catch (_) {}
  },
)
