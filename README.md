# TesteOpa

Projeto feito na linguagem node.js usando o framework Express.Desenvolvendo uma API que controla produtos e categorias, conta também com autenticação dos usuários. 


Para iniciar o projeto é necessário instalar as depêndencias principais:
npm i 
npm install express mongoose dotenv body-parser bcrypt jsonwebtoken
npm install --save-dev nodemon(opcional)

Configuração do arquivo .env:
Adicionando as variáveis de ambiente como,
DB_USER => nome do usuário no banco de dados
DB_PASS => senha do seu banco de dados
MONGO_HOST => URL do banco de dados
SECRET => Chave secreta para gerar os tokens JWT

Funcionamento do servidor:
É necessário inserir o comando "npm start", caso esteja no modo desenvolvedor "npm run dev"


Para a configuração, a organização das pastas ficou a seguinte:
backend/
├── index.js
└── Controller/
    ├── Produto.js
    └── Usuarios.js
    └──Categoria.js
    └──Consulta.js
    └──authMiddleware.js
└──Models/
  └──CategoriaModel.js
  └──ProdutoModel.js
  └──UsuarioModel.js
