// #    Llamar a las bibliotecas de express (importar) const nombre de la variable +Router = require, que llama al archivo, + la ubicacion del archivo
const  express = require ('express');
const petsRouter = require('./pets')
const cakeRouter = require('./API/V1/cakes') 


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
//# Importar las rutas en otros archivos, con ayuda del router (que esta dentro del archivo importado)
app.use(petsRouter)
app.use(cakeRouter)

//ERROR MIO, lo que importamos se manda a llamar aqui, mi error estaba en que coloque app.use(cakeRouter),
//cuando lo que habia importado era (app.useCounter), renombre el archivo importado y el app.use 

//# Inicializar el servidor 
app.listen(3000, () => {
    console.log('servidor ejecutandose en el puerto 3000')
})