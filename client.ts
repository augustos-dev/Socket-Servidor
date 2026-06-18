import * as net from 'net'
import * as readline from 'readline'
const PORTA =3535
const HOST ='127.0.0.1'


//configura a interface para ler o input do teclado no terminal 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// conecta o servidor TCP 
const cliente = net.createConnection({port:PORTA, host:HOST}, ()=> {
    console.log(`[+] Conectado ao servidor em ${HOST}:${PORTA}`)
    console.log("Digite suas mensagens abaixo, para encerrar, digite 'sair'.\n")
    fazerPergunta()
})

function fazerPergunta() {
    rl.question('Voce; ', (mensagem)=> {
        cliente.write(mensagem)

        if(mensagem.toLowerCase() === 'sair') {
            rl.close()
            cliente.end()
        } else {
            fazerPergunta()
        }
    })
}

cliente.on('error', (erro)=> {
    console.error(`\n[-] Nao foi possivel conectar ao servidor. Ele esta rodando?`)
    rl.close()
})

cliente.on('end', () => {
    console.log('[-] Conexao encerrada')
    rl.close()
})
