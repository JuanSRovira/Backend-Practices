// Dependiendo la variable de entorno del sistema se va a usar la configuracion adecuada de base de datos

// Tomar la configuracion del entorno de Node, y si existe usarla, de lo contrario establecer que estamos en modo desarrollo

const env = process.env.NODE_ENV || 'development'

// env = enviroment y en este caso es igual a development
const knexfile = require('./knexfile')
const knex = require('knex')
// Con esto ya puedo mandar a llamar la configuracion correcta del knex file
module.exports = knex(knexfile[env])
