routerAdd('POST', '/backend/v1/contato', (e) => {
  const info = e.requestInfo()
  const body = info.body || {}
  const nome = (body.nome || '').trim()
  const email = (body.email || '').trim()
  const telefone = (body.telefone || '').trim()
  const mensagem = (body.mensagem || '').trim()

  if (!nome || !email || !telefone || !mensagem) {
    return e.json(400, {
      success: false,
      message: 'Todos os campos (nome, email, telefone, mensagem) são obrigatórios.',
    })
  }

  try {
    const col = $app.findCollectionByNameOrId('mensagens')
    const record = new Record(col)
    record.set('nome', nome)
    record.set('email', email)
    record.set('telefone', telefone)
    record.set('mensagem', mensagem)
    $app.save(record)

    return e.json(200, {
      success: true,
      message: 'Mensagem registrada com sucesso!',
      recordId: record.id,
    })
  } catch (err) {
    return e.json(500, {
      success: false,
      message: 'Erro ao salvar mensagem: ' + err.message,
    })
  }
})
