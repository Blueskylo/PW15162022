let express = require('express')
let mysql = require('mysql')
//Que el cliente (Front End) pueda usar la API
let cors = require('cors')
let app = express()
//Recibir datos JSON
app.use(express.json())
let puerto = 3000

app.listen(puerto, function(){
    console.log("Servidor en linea")
})
//Base de datos
//parametros de conexion
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pw'
})
conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log('Conectado a la BD')
    }
})
//Rutas 
//Ruta de inicio - raiz
app.get('/', function(req, res){ //req = request, res = response
    res.send('Ruta de inicio');
}) 
//Ruta a todos los articulos
app.get('/api/articulos', function(req,res){
    conexion.query("select * from articulos", function(error,filas){
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})
//Ruta a un articulos
app.get('/api/articulos/:id', function(req,res){
    conexion.query("select * from articulos where id=?",[req.params.id], function(error,fila){
        if(error){
            throw error
        }else{
            res.send(fila)
        }
    })
})
//Ruta para agregar un articulo
app.post('/api/articulos',function(req,res){
    let data = {descripcion:req.body.descripcion,
                precio:req.body.precio,
                cantidad:req.body.cantidad}
    let sql = "insert into articulos set ?"
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})
//Ruta para actualizar un articulo
app.put('/api/articulos/:id', function(req,res){
    let id = req.params.id
    let descripcion = req.body.descripcion
    let precio = req.body.precio
    let cantidad = req.body.cantidads
    let sql = "update articulos set descripcion = ?, precio = ?, cantidad = ? where id = ?";
    conexion.query(sql, [descripcion, precio, cantidad, id], function(error, results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})
//Ruta para eliminar un articulo
app.delete('/api/articulos/:id', function(req,res){
    let id = req.params.id
    conexion.query('delete from articulos where id = ?', [id], function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})