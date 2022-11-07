// ************ Require's ************
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const mysql = require('mysql');
const cors = require('cors');

// ************ express() ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE




// Conexion 

// Cambiar parametros de configuración !!!!!!!!!!!
const connection = mysql.createConnection({
  host: 'mysql-food-connect.alwaysdata.net',
  user: '281015_appsn',
  password: 'apps1234',
  database: 'food-connect_proy1',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


  
// rutas y consultas !!!!!!!!!!!!!!!!!

app.post( "/insertar_usuario_comun" ,  (req, res) => {
  let datos = req.body.datosEnviados;
  connection.query(
    'INSERT INTO usuario (name, mail, password, dni) values ("' + datos[0] + '" , "' + datos[1] + '" , "' + datos[2] + '" , 0);', 
  (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
});

app.post( "/insertar_local" ,  (req, res) => {
  let datos = req.body.datosEnviados;
  connection.query(
    'INSERT INTO usuario (name, mail, cuit, telefono, password) values ("' + datos[0] + '" , "' + datos[1] + '" , "' + datos[2] + '" , "' + datos[3] +  '" , 1);', 
  (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
});


app.post( "/buscarUsuario" ,  (req, res) => {
  let datos = req.body.DatosSesion;
  connection.query(
    'SELECT id, mail, local FROM usuario WHERE name="' + datos[0] +'" AND password="'  + datos[1] + '" ;', 
  (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
});

app.post( "/editar_nombre_usuario" ,  (req, res) => {
  let datos = req.body.datos;
  connection.query(
    'UPDATE usuario SET nombre="'+datos[1]+'" WHERE id='+datos[0]+';', 
  (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
});


app.post( "/cargarProducto" ,  (req, res) => {
  let datos = req.body.datosProducto;
  connection.query(
    'INSERT INTO producto (nombre, precio, imagen) values ("'+datos[0]+'" , "'+ datos[1]+'" , "'+datos[2]+'");', 
  (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
});


app.get( "/obtenerProductos" ,  (req, res) => {
  connection.query(
    'SELECT nombre, precio, imagen FROM producto', 
  (err,rows) => {
    if(err) throw err;
    res.json(rows);
  });
});








// ************ Route System require and use() ************
const mainRouter = require('./routes/main'); // Rutas main

app.use('/', mainRouter);

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

// ************ exports app ************
module.exports = app;
