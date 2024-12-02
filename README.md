# Vaga-certa-app

Um aplicativo **React Native** para visualizar vagas de emprego e se conectar diretamente com as empresas, integrado a uma **API REST Node.js**.
O projeto tem como objetivo facilitar o acesso a oportunidades de emprego e simplificar a comunicação entre candidatos e empregadores.

---

## 🛠️ Tecnologias Utilizadas

### App React Native:
- **SDK**: Expo
- **Linguagem**: TypeScript
- **Navegação**: React Navigation
- **Armazenamento local**: AsyncStorage
- **Requisições HTTP**: Axios

### API Node.js:
- **Framework**: Express
- **Banco de Dados**: SQLite
- **ORM**: Sequelize

---

## ⚙️ Funcionalidades

### App React Native:
- Autenticação de usuários via login.
- Listagem de vagas de emprego cadastradas.
- Contato direto com empresas através de número de telefone redirecionado para o WhatsApp.

### API Node.js:
- Gerenciamento de usuários (CRUD).
- Gerenciamento de vagas de emprego (CRUD).
- Integração com o banco de dados SQLite via Sequelize.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado na máquina.
- Gerenciador de pacotes `npm` ou `yarn`.
- Expo CLI para rodar o aplicativo React Native.

## 🌟 Endpoints da API
### Rotas:
- GET /api/vagas: Lista todas as vagas de emprego.
- GET /api/vagas/id: Resgata os dados de uma vaga específica.
- POST /api/vagas: Cadastra uma nova vaga.
- PUT /api/vagas/id: Atualiza os dados de uma vaga específica.
- GET /api/usuarios: Lista todas os usuários cadastrados.
- GET /api/usuarios/id: Resgata os dados de um usuário específico.
- POST /api/usuarios: Cadastra um novo usuário.

## Estrutura da API
backend/  
└── api-express/  
    ├── config/  
    │   └── database.js  
    ├── models/  
    │   ├── usuario.js  
    │   └── vaga.js  
    ├── repositories/
    │   ├── usuarioRepository.js
    │   └── vagaRepository.js
    ├── routes/
    │   ├── usuarios.js
    │   └── vagas.js
    ├── database.sqlite
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── **server.js**

## Estrutura do APP
mobile/
└── vaga-certa-app/
    ├── assets/
    │   ├── adaptive-icon.png
    │   ├── favicon.png
    │   ├── icon.png
    │   └── splash-icon.png
    ├── src/
    │   ├── assets/
    │   │   ├── BGTop.png
    │   │   ├── vaga.jpg
    │   │   ├── vagaEmprego.jpg
    │   │   └── vagaTres.jpg
    │   ├── components/
    │   │   ├── Button/
    │   │   │   ├── index.tsx
    │   │   │   └── styles.ts
    │   │   ├── Input/
    │   │   │   ├── index.tsx
    │   │   │   └── styles.ts
    │   │   ├── Logo/
    │   │   │   ├── index.tsx
    │   │   │   └── styles.ts
    │   │   └── Vaga/
    │   │       ├── index.tsx
    │   │       └── styles.ts
    │   ├── context/
    │   │   └── UsuarioContext.tsx
    │   ├── screens/
    │   │   ├── Details/
    │   │   │   ├── index.tsx
    │   │   │   └── styles.ts
    │   │   ├── Form/
    │   │   │   ├── index.tsx
    │   │   │   └── styles.ts
    │   │   ├── Home/
    │   │   │   ├── index.tsx
    │   │   │   └── styles.ts
    │   │   ├── Login/
    │   │   │   ├── index.tsx
    │   │   │   └── styles.ts
    │   │   └── Profile/
    │   │       ├── index.tsx
    │   │       └── styles.ts
    │   ├── services/
    │   │   ├── api.ts
    │   │   ├── usuariosApi.ts
    │   │   └── vagasApi.ts
    │   ├── theme/
    │   │   └── index.ts
    │   └── utils/
    │       └── Types.ts
    ├── app.json
    ├── **App.tsx**
    ├── index.ts
    ├── package.json
    ├── package-lock.json
    └── tsconfig.json
