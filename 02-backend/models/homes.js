// El modelo trae los datos de la base de datos
// NO SE ENCARGA de validarlos ni de resolver problemas

// PASO #1 Traer la configuracion del entorno de knex y los detalles de la base de datos

const knex = require('../config')

// PASO #2 Crear un registro que me permita insertar un registro en mi tabla homes

const create = (body) => {
  return knex
    .insert(body) // Que datos voy a insertar
    .into('homes') // A donde voy a mandar esos datos (el homes debia estar en comillas)
    .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])// ¿Que quiero que me regrese?
}

module.exports = {
  create
}
