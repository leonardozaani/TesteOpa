# TesteOpa

O projeto foi separado por pastas de Models e Controllers.

Para iniciar o projeto é necessário iniciar com os seguintes comandos:
npm install express mongoose dotenv body-parser bcrypt jsonwebtoken
npm install --save-dev nodemon

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
