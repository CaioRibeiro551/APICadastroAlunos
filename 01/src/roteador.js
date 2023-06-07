const express = require('express');
const rotas = express();
const { obterAlunos, obterAlunoPeloId, adicionarAluno, excluirAluno } = require('./controladores/alunos')


rotas.get('/alunos', obterAlunos);
rotas.get('/alunos/:id', obterAlunoPeloId);
rotas.post('/alunos', adicionarAluno);
rotas.delete('/alunos/:id', excluirAluno);






module.exports = rotas;

