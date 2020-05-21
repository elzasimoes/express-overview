const express = require('express')
const app = express()

//Use pode ser aplicado para qualquer tipo de requisição, GET, POST
//Use atende todas as requisições
//All atende todas as requisições

app.use('/teste', (req, res) => {
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

    res.json({
        "name": "iPade 2323",
        "preço": "21212"
    })

    res.send('<h1>Olá</h1>')
})

// Startar Express
app.listen(3000, () => {
    console.log('Servidor rodando ...')
})