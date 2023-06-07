const express = require('express');
const roteador = require('./roteador');
const validaSenha = require('./intermediario');
const app = express();

app.use(express.json()); //Middleware que trás a requisição em json
app.use(validaSenha); // Middleware sendo executado e protegendo todas as rotas
app.use(roteador);

app.listen(3000);

