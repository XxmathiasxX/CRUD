const express = require('express');
const router = express.Router();//este metodo nos devuelve un objeto js al cual se le agregan las rutas

const controladores = require('../controllers/controladores');

router.get('/',controladores.list);


module.exports = router;