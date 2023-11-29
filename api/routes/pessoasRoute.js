const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaPessoasAtivas)
router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pagaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.get('/pessoas/:id/apagada', PessoaController.pegaPessoaApagada)
router.delete('/pessoas/:id/definitivo', PessoaController.apagaPessoaDefinitivo)

router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
router.get('/pessoas/:estudanteId/matricula/:matriculaId/apagada', PessoaController.pegaMatriculaApagada)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId/definitivo', PessoaController.apagaMatriculaDefinitivo)

module.exports = router