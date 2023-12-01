const database = require('../models')
const Sequelize = require('sequelize')

class PessoaController {
  static async pegaPessoasAtivas(req, res){
    try {
      const pessoasAtivas = await database.Pessoas.findAll()
      return res.status(200).json(pessoasAtivas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTodasAsPessoas(req, res){
    try {
      const todasAsPessoas = await database.Pessoas.scope('todos').findAll()
      return res.status(200).json(todasAsPessoas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pagaPessoa(req, res){
    const { id } = req.params
    try {
      const umaPessoa = await database.Pessoas.findOne( { where: { id: Number(id) }})
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
      return res.status(200).json(novaPessoaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPessoa(req, res){
    const { id } = req.params
    const novaInfor = req.body
    try {
      await database.Pessoas.update(novaInfor, { where: {id: Number(id) }})
      const pessoaAtulizada = await database.Pessoas.findOne( { where: {id: Number(id) }})
      return res.status(200).json(pessoaAtulizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPessoa(req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.destroy({ where: { id: Number(id)}})
      return res.status(200).json({message: `id ${id} deletado`})
    } catch (error) {
      return res.status(500).json(error.message)
    } 
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.restore( { where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} restaurado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaPessoaApagada(req, res) {

    const { id } = req.params
    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
        paranoid: false 
      })
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPessoaDefinitivo(req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.destroy({ 
        where: { 
          id: Number(id)
        },
        force: true
      })
      return res.status(200).json({message: `id ${id} deletado definitivamente`})
    } catch (error) {
      return res.status(500).json(error.message)
    } 
  }

  static async pegaMatricula(req, res){
    const { estudanteId, matriculaId } = req.params
    try {
      const umaMatricula = await database.Matriculas.findOne( { 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId) 
        }
      })
      return res.status(200).json(umaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaMatricula(req, res) {
    const { estudanteId } = req.params
    const novaMatricula = { ...req.body,  estudante_id: Number(estudanteId)} 
    try {
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
      return res.status(200).json(novaMatriculaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaMatricula(req, res){
    const { estudanteId, matriculaId } = req.params
    const novaInfor = req.body
    try {
      await database.Matriculas.update(novaInfor, { 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      const matriculaAtulizada = await database.Matriculas.findOne( { 
        where: {
          id: Number(matriculaId) 
        }
      })
      return res.status(200).json(matriculaAtulizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.destroy({ 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json({message: `id ${matriculaId} deletado`})
    } catch (error) {
      return res.status(500).json(error.message)
    } 
  }

  static async restauraMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.restore({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json({ mensagem: 'matricula restaurada'})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaMatriculaApagada(req, res){
    const { estudanteId, matriculaId } = req.params
    try {
      const umaMatricula = await database.Matriculas.findOne( { 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId) 
        },
        paranoid: false
      })
      return res.status(200).json(umaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaMatriculaDefinitivo(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.destroy({ 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        },
        force: true
      })
      return res.status(200).json({message: `id ${matriculaId} deletado`})
    } catch (error) {
      return res.status(500).json(error.message)
    } 
  }

  static async pegaMatriculas(req, res) {
    const { estudanteId } = req.params
    try {
      const pessoa = await database.Pessoas.findOne({where: { id: Number(estudanteId) }})
      const matriculas = await pessoa.getAulasMatriculadas()
      return res.status(200).json(matriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    } 
  }

  static async pegaMatriculasPorTurma(req, res) {
    const { turmaId } = req.params
    try {
      const todaAsMatriculas = await database.Matriculas
        .findAndCountAll({
          where: {
            turma_id: Number(turmaId),
            status: 'confirmado'
          },
          limit: 20,
          order: [['estudante_id', 'ASC']]
        })
      return res.status(200).json(todaAsMatriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    } 
  }

  static async pegaTurmasLotadas(req, res) {
    const lotacaoTurma = 2
    try {
      const turmasLotadas = await database.Matriculas
        .findAndCountAll({
          where: {
            status: 'confirmado'
          },
          attributes: ['turma_id'],
          group: ['turma_id'],
          having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
        })
      return res.status(200).json(turmasLotadas.count)
    } catch (error) {
      return res.status(500).json(error.message)
    } 
  }

}

module.exports = PessoaController