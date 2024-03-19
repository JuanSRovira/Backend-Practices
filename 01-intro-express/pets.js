const express = require('express')
//Router es un objeto que nos permite crear rutas, (por redundante que suene)
const router = express.Router()
const petList = require('./API/V1/petsData')



//  QUERY
//QUERY PARAMS: URL/api/version/pets?age=2&type=dog
//LOS FILTROS
//Son similares a los params pero se suelen enviar en la URL para enviar uno o mas datos
//Las QUERYS son abiertas, no definimos cuantas variables vamos a obtener, ni como se van a llamar.
//Nuestra responsabilidad es solo tomar en cuenta aquellos que nos interesan.


router.get('/api/v1/pets', (request, response) => {
    console.log('Query de Pets', request.query)
    //filtrar
    const {age, type} = request.query
    if (!age && !type ){  //SI NO TIENE EDAD (!AGE) Y (&& condicional forzosa) TAMPOCO TIENE TIPO (TYPE)
                        // MANDARA UNA LISTA DE LAS MASCOTAS
        response.status(200).send(petList)
        return
        }
                        //SI YA TIENE LA INFORMACION SE LE OTORGA LA LISTA FILTRADA
    const filteredPets =  petList.pets.filter(pet => {
        return pet.age == age || pet.type== type 
    })
    response.status(200).send(filteredPets)
    return
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
