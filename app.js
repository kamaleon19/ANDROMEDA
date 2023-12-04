/* Dependencias */
const express = require('express');
const app = express()




// Settings
app.set('view engine', 'ejs')
app.use(express.static('public'));

// Routes
const indexRoutes = require('./routes/indexRoutes')
app.use('/',indexRoutes)

const pruebaRoutes = require('./routes/prueba')
app.use('/prueba', pruebaRoutes)
// Server




app.listen(3500,()=>{
    console.log('Servidor corriendo');
})