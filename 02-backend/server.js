require('dotenv').config()
const express = require('express')
const homeRoutes = require('../02-backend/routes/homeRoutes')

const app = express()
/* Middleware, pues su ejecucion es en medio de la aplicacion */
app.use(express.urlencoded({ extended: true })) // Permite recibir datos especiales como (arrays) en el body
app.use(express.json()) // Middleware para trabajar con json

/* Routes */
app.use('/api/v1', homeRoutes)

/* Estructura MUUUY BASICA de un servidor web */
app.listen(3000, () => console.log('Server ON: 3000'))
