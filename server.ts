import * as net from 'net'

const PORTA = 3535
const HOST = '127.0.0.1'

// criando o servidor TCP 

const servidor = net.createServer((conexao) => {
    const enderecoCliente = `${conexao.remoteAddress}:${conexao.remotePort}`
    console.log(`[+] Conexao estabelcida com sucesso. Origem: ${enderecoCliente}`)

    //recebi os dados enviados pelo o cliente 
    conexao.on('data',(dados) => {
        const mensagem = dados.toString().trim()
        console.log(`[Cliente]:${mensagem}`)

        if (mensagem.toLowerCase() === 'sair') {
            console.log(`[-] O cliente ${enderecoCliente} encerrou a sessao`)
            conexao.end()
        }
    })

    conexao.on('end',() => {
        console.log(`[-] Conexao encerrada pelo o cliente.`)
    })

    conexao.on('error', (erro)=> {
        console.error(`[!] Erro na conexao:${erro.message}`)
    })
})

// coloca o servidor para rodar na pora 3535

servidor.listen(PORTA,HOST, () => {
    console.log(`[*] Servidor aguardando conexoes na porta ${PORTA}`)
})
