const { Router } = require("express");
const UserController = require("../controller/UserController");
const { validateUser, validateUserId } = require("../middlewares/ValidateUser");



const router = Router();

// Users
//Configurar as rotas CRUD
router.post('/', validateUser, (req, res) =>{
    UserController.create(req, res)

});

router.get('/', validateUserId, validateUser, (req, res) =>{
    UserController.getAll(req, res)

});

router.delete('/:id', validateUserId, (req, res) =>{
    UserController.delete(req, res)

});

router.put('/:id', validateUserId, validateUser, (req, res) =>{
    UserController.update(req, res)

});

router.get('/:id', validateUserId, (req, res) =>{
    UserController.getOne(req, res)

});



module.exports = router;