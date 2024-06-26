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
const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true) // Traemos solo los campos a los que no hayamos hecho soft delete
}

const FindOne = (houseId) => {
  return knex
    .select(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
    .from('homes')
    .where({ house_id: houseId })
    .where('active', true)
} // Notese que son consultas de base de datos pero integradas al codigo

const update = (houseId, body) => {
  return knex
    .update(body)
    .from('homes')
    .where({ house_id: houseId })
    .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}

// BORRAR REGISTRO REAL
const destroy = (houseId) => {
  return knex
    .del() // del, porque del es una palabra reservada en JS
    .from('homes')
    .where({ house_id: houseId })
}
// BORRADO LOGICO
const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where({ house_id: houseId })
}
module.exports = {
  create, findAll, FindOne, update, destroy, softDelete
}
