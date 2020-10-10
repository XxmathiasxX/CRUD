const express = require('express');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const path = require('path');

//importing routes 
const rutas = require('./routes/routes');
const { urlencoded } = require('express');



// Setting of express
app.set('puerto', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'news'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', rutas);

//archivos staticos
app.use(express.static(path.join(__dirname, 'public')));

//empezando el servidor
app.listen(app.get('puerto'), () => {
    console.log('servidor iniciado en el puerto 3000');
});

