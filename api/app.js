let express = require('express');
let mysql = require('mysql');
// Que el cliente Frontend pueda usar la API
const cors = require("cors");
// let cors = require('cors');
let app = express();
// Recibir datos JSON
app.use(express.json());
app.use(cors());

let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor en línea");
});

// Base de datos
// Parámetros de conexión
let conexion = mysql.createConnection({
    host: 'localhost', // si el módulo de XAMPP te enseñara una dirección IP, aquí estaría colocada
    user: 'root', // si no tienes usuario, por defecto es root
    password: '', // si es root, no hay contraseña
    database: 'pw'
});
conexion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('Conectado a la base de datos');
    }
});

// Rutas
// Ruta de inicio - raíz
app.get('/', function(req, res){ // request, response
    res.send("Ruta de inicio");
});

// Ruta a todos los artículos
app.get('/api/articulos', function(req, res){
    conexion.query('SELECT * FROM articulos', function(error, filas){
        if(error){
            throw error;
        }
        else{
            res.send(filas);
        }
    });
});

// Ruta a un artículo
app.get('/api/articulos/:id', function(req, res){ // a través de la URL se recibirá el ID a buscar
    conexion.query('SELECT * FROM articulos WHERE id=?', [req.params.id], function(error, fila){ // ? = parámetro pendiente, en espera de ser llenado
        // [req.params.id] hace referencia al parámetro ubicado en la URL. 'params' es el conjunto de parámetros que vienen en la ruta
        if(error){
            throw error;
        }
        else{
            res.send(fila);
        }
    });
});

// Ruta para agregar un artículo
app.post('/api/articulos', function(req, res){
    let data = {descripcion: req.body.descripcion,
                precio: req.body.precio,
                cantidad: req.body.cantidad};
    let sql = "INSERT INTO articulos SET ?";
    conexion.query(sql, data, function(error, results){
        if(error){
            throw error;
        }
        else{
            res.send(results);
        }
    });
});

// Ruta para actualizar un artículo
app.put('/api/articulos/:id', function(req, res){
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let cantidad = req.body.cantidad;
    let sql = "UPDATE articulos SET descripcion = ?, precio = ?, cantidad = ? WHERE id = ?";
    conexion.query(sql, [descripcion, precio, cantidad, id], function(error, results){
        if(error){
            throw error;
        }
        else{
            res.send(results);
        }
    });
});

// Ruta para borrar un artículo
app.delete('/api/articulos/:id', function(req, res){
    let id = req.params.id;
    conexion.query('DELETE FROM articulos WHERE id = ?', [id], function(error, results){
        if(error){
            throw error;
        }
        else{
            res.send(results);
        }
    });
});

// Ctrl + C y 'node app' para reiniciar servidor