# Buscador de perfil do Github

Este é um projeto React simples que permite aos usuários buscar perfis do Github e exibir informações básicas como foto de perfil, nome e bio.

## Funcionalidades

* **Busca de Usuários:** Permite aos usuários digitar um nome de usuário do Github e buscar informações do perfil correspondente.
* **Exibição de Perfil:** Exibe a foto do perfil, nome e biografia do usuário do Github encontrado.
* **Mensagens de Erro:** Mostra uma mensagem de erro amigável caso nenhum perfil seja encontrado ou se o usuário tentar buscar com o campo vazio.
* **Indicador de Carregamento:** Exibe um indicador visual enquanto a API do Github está sendo consultada.

## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* [React](https://react.dev/) - Uma biblioteca JavaScript para construir interfaces de usuário.
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Linguagem de marcação padrão para criar páginas da web.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Linguagem de estilo para descrever a apresentação de documentos HTML.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Linguagem de programação que torna as páginas web interativas.
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Utilizada para fazer requisições à API do Github.
* [Módulos CSS](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) - Para estilização com escopo local.

## Como Rodar o Projeto Localmente

Para rodar este projeto na sua máquina local, siga os seguintes passos:

1.  **Clone o repositório:**
    ```bash
    git clone [[https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)]
    cd seu-repositorio
    ```

2.  **Instale as dependências:**
    Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) (ou [yarn](https://yarnpkg.com/)) instalados na sua máquina. Execute o seguinte comando na raiz do projeto:

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    Execute o seguinte comando para iniciar o servidor de desenvolvimento do Vite:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    Isso geralmente abrirá o seu navegador automaticamente na porta `http://localhost:5173` (a porta padrão do Vite pode variar). Caso contrário, verifique o terminal para a URL e porta corretas e abra-o manualmente.
