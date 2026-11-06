import { createServer } from 'node:http'

const server = createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    })

    res.end('Servidor Node.js funcionando!')
})

const port = Number(process.env.PORT || 3000)

server.listen(port, '0.0.0.0', () => {
    console.log(`Servidor executando na porta ${port}`)
})