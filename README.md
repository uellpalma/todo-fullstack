# App To-do

WIP...

## Índice

- [Sobre](#sobre)
- [Instalação](#instalação)

## Sobre

Projeto de aplicativo to-do, feito como parte do desafio full-stack.

Obs: Como ainda não tem uma api conectada, para ultrapassar o fluxo de autenticação é só alterar o hack na arquivo de rotas src/routes/index.tsx para:

```bash
   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false);
         setUserData({});
      }, 4000);
   }, []);
```

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/uellpalma/todo-fullstack.git
   cd todo-fullstack/mobile-app
   ```

2. **Instale as dependências:**

   Certifique-se de ter o [Node.js](https://nodejs.org/) e [Yarn](https://yarnpkg.com/) instalados.

   ```bash
   yarn install
   ```

3. **Instale o Expo CLI globalmente (caso ainda não tenha):**

   ```bash
   npm install -g expo-cli
   # ou
   yarn global add expo-cli
   ```

## Uso

1. **Inicie a aplicação:**

   ```bash
   yarn start
   ```

2. Após executar o comando, você verá um QR code no terminal ou no navegador. Use o aplicativo Expo Go em seu dispositivo móvel (iOS ou Android) para escanear o QR code e visualizar a aplicação.

