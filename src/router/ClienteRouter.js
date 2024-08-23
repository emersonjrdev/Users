const express = require('express');
const router = express.Router();
const { validateCliente, validateClientetId } = require('../middlewares/ValidateCliente');
const ClienteController = require('../controller/ClienteController');

// Clientes

router.post('/', validateCliente, (req, res) =>{
    ClienteController.create(req, res)

});

router.get('/', validateCliente, validateClientetId, (req, res) =>{
    ClienteController.getAll(req, res)

});

router.delete('/:id', validateClientetId, (req, res) =>{
    ClienteController.delete(req, res)

});

router.put('/:id', validateCliente, validateClientetId, (req, res) =>{
    ClienteController.update(req, res)

});

router.get('/:id', validateClientetId, (req, res) =>{
    ClienteController.getOne(req, res)

});


module.exports = router;

 