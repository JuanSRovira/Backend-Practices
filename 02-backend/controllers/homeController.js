/* Los controladores tienen la lógica de negocio */

const ModelHomes = require('../models/homes')

const createHome = (req, res) => {
  // Aquí yo debería crear mi home
  // res.send({ message: 'Home created (FAKE)' })
  ModelHomes.create(req.body)
    .then(req.body)
    .then((result) => {
      res.status(201).send({ message: 'Home created', data: result })
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error creating Home', error })
    })
}

const findAllHomes = (req, res) => {
  ModelHomes.findAll(req.body)
    .then(req.body)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      res.status(400).send({ message: 'Error listing Home', error })
    })
}

module.exports = {
  createHome, findAllHomes
}
