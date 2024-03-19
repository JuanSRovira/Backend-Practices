const express = require('express')
const router = express.Router()

//ejemplo de mala practica: uso de paths en lugar de get y un status 207 en lugar de 200, 401 en lugar de 200
//Los codigos y los verbos de estado son una convencion pero no una regla, cada desarrollador usa 
//los que les da la gana, PERO NO ES RECOMENDABLE, ES MALA PRACTICA

router.patch('/api/v1/cakes/:cakeId', (request, response ) => {
    const {cakeId} = request.params
    if (cakeId > 100) {
        response.status(401).send({
            message: 'El pastel huele a pollo'
        })
    } else {
        const mensaje = {
            id: `El id del pastel es ${cakeId}`
        }
        response.status(207).send(message)
        return
    }
    response.send(cakeId)
})

module.exports = router