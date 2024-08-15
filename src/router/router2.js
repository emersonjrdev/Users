const express = require('express');
const router = express.Router();
const ProdutoController = require("../controller/ProdutoController");

// Produtos

router.post('/', (req, res) =>{
    ProdutoController.create(req, res)

});

router.get('/', (req, res) =>{
    ProdutoController.getAll(req, res)

});

router.delete('/:id', (req, res) =>{
    ProdutoController.delete(req, res)

});

router.put('/:id', (req, res) =>{
    ProdutoController.update(req, res)

});

router.get('/:id', (req, res) =>{
    ProdutoController.getOne(req, res)

});


module.exports = router;