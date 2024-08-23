const express = require('express');
const router = express.Router();
const ProdutoController = require("../controller/ProdutoController");
const { validateProduct, validateProductId } = require('../middlewares/ValidateProduct');

// Produtos

router.post('/', validateProduct, (req, res) =>{
    ProdutoController.create(req, res)

});

router.get('/', validateProduct, validateProduct, (req, res) =>{
    ProdutoController.getAll(req, res)

});

router.delete('/:id', validateProductId, (req, res) =>{
    ProdutoController.delete(req, res)

});

router.put('/:id', validateProduct, validateProductId, (req, res) =>{
    ProdutoController.update(req, res)

});

router.get('/:id', validateProductId, (req, res) =>{
    ProdutoController.getOne(req, res)

});


module.exports = router;