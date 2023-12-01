const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
  .get('/pessoas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id', PessoaController.pagaPessoa)
  .get('/pessoas/:id/apagada', PessoaController.pegaPessoaApagada)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatricula)
  .get('/pessoas/:estudanteId/matricula/:matriculaId/apagada', PessoaController.pegaMatriculaApagada)
  .get('/pessoas/:estudanteId/matriculas', PessoaController.pegaMatriculas)
  .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
  .get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)

  .post('/pessoas', PessoaController.criaPessoa)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .delete('/pessoas/:id', PessoaController.apagaPessoa)
  .delete('/pessoas/:id/definitivo', PessoaController.apagaPessoaDefinitivo)

  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId/definitivo', PessoaController.apagaMatriculaDefinitivo)

module.exports = router