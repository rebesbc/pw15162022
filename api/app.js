let express = require('express');
let mysql = require('mysql');
let app = express();
let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor en línea");
});