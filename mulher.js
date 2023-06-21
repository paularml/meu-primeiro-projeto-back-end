const express = require('express')
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Simaria Conceição',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_800_800/0/1563116714583?e=1692835200&v=beta&t=yeCbKB1NG8DLQKbFthyeKhEiTWDyx0a8loDHqT-29v4',
        minibio: 'Desenvolvedora e instrutora' 
    })
}

function mostraPorta() {
    console.log ('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher ))
app.listen(porta, mostraPorta)

