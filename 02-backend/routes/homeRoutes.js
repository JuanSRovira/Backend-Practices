const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
// Me marcaba un error, pero por la ruta de homecontroller, no estoy seguro porque funciona así si deberia ser sensible al camelcase...

// Si la ruta es /homes, entonces se ejecuta el controlador homeController.createHome

router.post('/homes', homeController.createHome)
router.get('/homes', homeController.findAllHomes)
router.get('/homes/:houseId', homeController.findOneHome)

module.exports = router
