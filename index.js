const express = require('express')
const app = express()

const saudacao = require('./middleware')
const bodyParser = require('body-parser')
const usuarioApi = require('./api/usuario')

require('./api/produto')(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

//Qualquer texto do orpo da requisição será interpretrado
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Elza'))



// Função Middleware

app.use('/teste', (req, res, next) => {
    console.log('Antes ')
    next()
})

app.post('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano: ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // req.on('end', function() {
    //     res.send(corpo)

    //     })
    //     })

    res.send(req.body)

})



// : Significa que essa parte pode mudar na URL, que vai ser acessado como parametro
app.get('/clientes/:id', (req, res) => {
    //Passar uma função middleware
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/teste', (req, res, next) => {
    console.log('Durante')
    res.json({
        data: [
            { id: 7, name: 'Ana', Position: 1 },
            { id: 3, name: 'Joana', Position: 2 },
            { id: 4, name: 'Maria', Position: 3 },
            { id: 5, name: 'Lara', Position: 4 },
            { id: 5, name: 'Rayane', Position: 4 }
        ],
        count: 3,
        skip: 0,
        limit: 3,
        status: 200
    })
    next()
})

app.use('/teste', (req, res) => {
    console.log('Depois ')
})

// Startar Express
app.listen(3000, () => {
    console.log('Backend rodando na porta http://localhost:3000/')
})