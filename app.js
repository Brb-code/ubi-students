const express = require("express")
const app = express()
const puerto = 3000
const cors = require('cors')

app.use(cors())

app.set('views', './views')
app.set('view engine', 'pug')

//rutas
app.get('/test', (req, res) => {
    res.json({msg:'Servicio en funcionamiento'})
})
app.get('', (req, res) => {
    
    res.render('index', {title:'Estudiantes UBI'})
})

app.listen(puerto, () => {
    console.log("Servicio corriendo en el puerto "+ puerto)
})

module.exports = app