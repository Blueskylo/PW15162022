let express = require('express')
let mysql = require('mysql')
let puerto = 3000
let app = express()

app.listen(puerto, function(){
    console.log("Servidor en linea")
})