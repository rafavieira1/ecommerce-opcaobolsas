# Opção Bolsas - E-commerce

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 14.x ou superior)
- [npm](https://www.npmjs.com/)
- [VSCode](https://code.visualstudio.com/)

## 🔧 Configuração do Ambiente

### 1. Clone o repositório
```bash
git clone [https://github.com/rafavieira1/ecommerce-opcaobolsas.git]
cd opcao-bolsas
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
REACT_APP_FIREBASE_API_KEY=sua_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=seu_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=seu_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=seu_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=seu_measurement_id
```

> ⚠️ Você precisará criar um projeto no [Firebase Console](https://console.firebase.google.com/) para obter estas credenciais.

## 🚀 Executando o projeto

Para rodar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

## 📦 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── contexts/      # Contextos do React (ex: CartContext)
├── hooks/         # Hooks personalizados
├── lib/           # Funções utilitárias
├── pages/         # Páginas da aplicação
├── types/         # Definições de tipos TypeScript
└── mocks/         # Dados mockados para desenvolvimento
```

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)
- [React Query](https://tanstack.com/query/latest)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🔐 Autenticação

O projeto utiliza Firebase Authentication para gerenciamento de usuários. As funcionalidades incluem:
- Login
- Cadastro
- Gerenciamento de perfil

## 🛍️ Funcionalidades

- Autenticação de usuários
- Catálogo de produtos
- Carrinho de compras
- Perfil do usuário
- Responsividade para dispositivos móveis

## 👥 Autores

Rafael Silva Vieira