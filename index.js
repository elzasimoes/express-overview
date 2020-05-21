const express = require('express')
const app = express()

app.use((req, res) => {
    res.send('<h1>Olá</h1>')
})

// Startar Express
app.listen(3000, () => {
    console.log('Servidor rodando ...')
})