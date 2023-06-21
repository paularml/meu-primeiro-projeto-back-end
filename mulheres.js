const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simaria conceição',
        imagem: 'none',
        minibio: 'desenvolvedora e instrutora'
    },
    {
        nome: 'Iana Chan',
    imagem:'none',
    minibio: 'fundadora do programaria'
    },
    {
        nome: 'nina da hora',
        imagem: 'none',
        minibio: 'hacker antirracista'
    }
    
]
function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log ('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)

