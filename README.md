# Socket Servidor 🚀

Um projeto de comunicação TCP bidireccional entre servidor e cliente utilizando **Node.js**, **TypeScript** e a biblioteca nativa **`net`**.

## 📋 Sobre o Projeto

Este projeto implementa um servidor TCP que aguarda conexões de clientes e permite troca de mensagens em tempo real. É um exemplo didático de como criar aplicações de rede em Node.js sem dependências externas complexas.

### Características

- ✅ Servidor TCP ouvindo na porta 3535
- ✅ Cliente interativo com entrada via terminal
- ✅ Suporte a múltiplas conexões simultâneas
- ✅ Mensagens em tempo real
- ✅ TypeScript com tipagem forte
- ✅ Tratamento de erros robusto

---

## 🛠️ Requisitos

- **Node.js** (v18+)
- **npm** ou **yarn**
- **TypeScript** (instalado via devDependencies)

---

## 📦 Instalação

1. Clone ou baixe o repositório:
```bash
cd Socket-Servidor
```

2. Instale as dependências:
```bash
npm install
```

---

## 🚀 Como Usar

### Terminal 1: Iniciar o Servidor

```bash
npm run dev
```

Você verá:
```
[*] Servidor aguardando conexoes na porta 3535
```

### Terminal 2: Conectar o Cliente

```bash
npx ts-node client.ts
```

Você verá:
```
[+] Conectado ao servidor em 127.0.0.1:3535
Digite suas mensagens abaixo, para encerrar, digite 'sair'.

Voce;
```

### Enviando Mensagens

Digite qualquer mensagem e pressione **Enter**:

```
Voce; Ola tudo Bem??
[Cliente]:Ola tudo Bem??
```

Para encerrar a conexão, digite `sair`.

---

## 📁 Estrutura do Projeto

```
Socket-Servidor/
├── server.ts         # Servidor TCP
├── client.ts         # Cliente interativo
├── package.json      # Dependências do projeto
├── tsconfig.json     # Configuração TypeScript
└── README.md         # Documentação
```

---

## 💻 Detalhes Técnicos

### Servidor (`server.ts`)

- Cria um servidor TCP com `net.createServer()`
- Aguarda conexões na porta **3535**
- Processa mensagens recebidas dos clientes
- Detecta quando o cliente envia `'sair'` para encerrar

### Cliente (`client.ts`)

- Conecta ao servidor via `net.createConnection()`
- Utiliza `readline` para input interativo do terminal
- Envia mensagens ao servidor
- Encerra quando usuário digita `'sair'`

---

## 📸 Execução em Ação

**Servidor iniciado:**
```
[*] Servidor aguardando conexoes na porta 3535
[+] Conexao estabelcida com sucesso. Origem: 127.0.0.1:52020
[Cliente]:Ola tudo Bem??
[Cliente]:as mensagens esta sendo recebidas corretamente ??
```

**Cliente conectado e enviando mensagens:**
```
[+] Conectado ao servidor em 127.0.0.1:3535
Digite suas mensagens abaixo, para encerrar, digite 'sair'.

Voce; Ola tudo Bem??
Voce; as mensagens esta sendo recebidas corretamente ??
Voce;
```

---

## 🔧 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor em modo watch (recarrega ao salvar) |
| `npx ts-node server.ts` | Executa o servidor uma vez |
| `npx ts-node client.ts` | Conecta um cliente ao servidor |

---

## 🎓 Aprendizados

Este projeto demonstra:

- Criação de servidores TCP com Node.js
- Manipulação de conexões de socket
- Tratamento de eventos em Node.js (`on('data')`, `on('error')`, `on('end')`)
- Uso de TypeScript para aplicações backend
- Entrada/saída interativa no terminal com `readline`

---

## 🐛 Troubleshooting

**Erro: "Nao foi possivel conectar ao servidor"**
- Certifique-se de que o servidor está rodando no terminal anterior
- Verifique se a porta 3535 está disponível

**Erro: "command not found: npx"**
- Reinstale o Node.js

**Porta já em uso**
- Altere a porta em `server.ts` e `client.ts` (variável `PORTA`)

---

## 📝 Licença

ISC

---


