// #    Llamar a las bibliotecas de express (importar)
const  express = require ('express');
const petsRouter = require('./API/V1/pets')

//# Crear la instancia express  (crear una aplicacion )
const app = express()

//# Configurar la app de express(app.use)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ERROR MIO: Me aparecio un error porque al usar el app.use(express.json, no coloque los parentesis que lo validan
// express.json en lugar de *express.json()* )

//#Crear las rutas (app.get)
app.get ('/', (request, response) => {
    response.send('Hola Mundo')
})

app.use(petsRouter)

//# Inicializar el servidor 
app.listen(3000, () => {
    console.log('servidor ejecutandose en el puerto 3000')
})