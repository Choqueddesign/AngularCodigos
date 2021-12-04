const express = require("express");
const {traerInfo,guardarInfo,} = require('../controllers/prestamosController')
const prestamitosPeticiones = express.Router();

prestamitosPeticiones.get('/', traerInfo );
prestamitosPeticiones.post('/', guardarInfo );
prestamitosPeticiones.put('/', );
prestamitosPeticiones.patch('/', );
prestamitosPeticiones.delete('/', );

module.exports = {
    prestamitosPeticiones,
}