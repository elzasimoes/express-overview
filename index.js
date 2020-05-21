const express = require('express')
const app = express()


// Função Middleware

app.use('/teste', (req, res, next) => {
    console.log('Antes ')
    next()
})

app.get('/teste', (req, res, next) => {
    console.log('Durante')
    res.json({
        data: [
            { id: 7, name: 'Ana', Position: 1 },
            { id: 3, name: 'Joana', Position: 2 },
            { id: 4, name: 'Maria', Position: 3 }
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
    console.log('Servidor rodando ...')
})