const express = require('express')
//Router es un objeto que nos permite crear rutas, (por redundante que suene)
const router = express.Router()

const petList = {
    "pets" : [
        {
            "id": 1,
            "name": "Balin",
            "Type": "dog",
            "age": 2,
        },
        {
            "id": 2,
            "name": "Misifu",
            "Type": "cat",
            "age": 1,
        },
        {
            "id": 3,
            "name": "Chilaquil",
            "Type": "dog",
            "age": 3,
        },
        {
            "id": 4,
            "name": "Perry",
            "Type": "Platypus",
            "age": 3,
        },
        {
            "id": 5,
            "name": "Piolin",
            "Type": "Bird",
            "age": 1,
        }, 
    ]
}

router.get('/api/v1/pets', (request, response) => {
    response.send(petList)
})

router.get('/api/v1/pets/:id', (request, response) =>{
    console.log('Params de onePet', request.params)

    const onePet = petList.pets.find(pet => pet.id == request.params.id)
    onePet ? response.status(200).send(onePet) : response.status(404).send({
        message: 'Pet Not found :('
    })

})

module.exports = router

//Tuve un problema con llamar a los id de las mascotas, el servidor no estaba actualizado y me confie en
//que tenia el nodemon activo para guardar los cambios en lugar de reiniciarlo, al momento de revisar me di
//cuenta que el script dev y el start estaban invertidos, lo que no iniciaba el nodemon, la llamada estaba bien
