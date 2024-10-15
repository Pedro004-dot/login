Aplicação de Login - Backend


Este é o repositório da aplicação de login. Ele contém apenas o backend, desenvolvido em TypeScript e utilizando PostgreSQL como banco de dados. A aplicação oferece funcionalidades básicas de autenticação, como criação de usuários, autenticação, deleção e busca de usuários. Senhas são armazenadas de forma segura, utilizando criptografia, e um token é gerado quando o usuário se autentica com sucesso.

Tecnologias Utilizadas
Node.js: Ambiente de execução do JavaScript.
TypeScript: Superset do JavaScript, tipagem estática.
PostgreSQL: Banco de dados relacional utilizado.
JWT (JSON Web Token): Geração de token de autenticação.
bcrypt: Biblioteca para criptografia de senhas.
Pré-requisitos
Antes de começar, certifique-se de ter os seguintes itens instalados:

Node.js (versão 14.x ou superior)
npm (gerenciador de pacotes)
PostgreSQL (versão 13.x ou superior)
Configuração
Clone este repositório:

bash
Copiar código
git clone https://github.com/seuusuario/seurepositorio.git
Acesse a pasta do backend:

bash
Copiar código
cd backend
Instale as dependências:

bash
Copiar código
npm install
Crie um banco de dados PostgreSQL:

sql
Copiar código
CREATE DATABASE nome_do_banco;
Configure as variáveis de ambiente:

Crie um arquivo .env na pasta backend com as seguintes variáveis:

bash
Copiar código
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
JWT_SECRET=sua_chave_secreta_para_token
Executando o Backend
Para iniciar o servidor, rode o seguinte comando na pasta backend:

bash
Copiar código
npm run dev
A aplicação estará disponível em http://localhost:3333.

Rotas Disponíveis
POST /users/create: Criação de um novo usuário.
Body: { "name": "string","email":"email", "password": "string" }
POST /users/authenticate: Autenticação de um usuário.
Body: { "email": "string", "password": "string" }
Resposta: { "token": "string" }
GET /users/:id: Retorna as informações do usuário (requer token).
Headers: Authorization: Bearer <token>
DELETE /users/:id: Deleta um usuário (requer token).
Headers: Authorization: Bearer <token>

Segurança: As senhas dos usuários são criptografadas com bcrypt antes de serem armazenadas no banco de dados.
Autenticação: A autenticação é baseada em JWT. Todas as rotas protegidas devem ser acessadas com um token válido no cabeçalho Authorization.
Validação: Middleware para validação de token JWT nas rotas protegidas.
Código Limpo: A aplicação segue os princípios de Clean Code, com separação clara de responsabilidades, organização modular e nomenclatura consistente.
Melhorias Futuras
Implementação de testes unitários e de integração.
Documentação mais detalhada com OpenAPI (Swagger).
Validação de dados de entrada mais robusta.
Contribuição
Sinta-se à vontade para abrir issues e pull requests. Todo tipo de feedback é bem-vindo!

