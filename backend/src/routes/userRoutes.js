const express = require('express');
const router = new express.Router();
const {signUp, login, getUsers, getUserById} = require('../controllers/userController')

router.post('/signUp',signUp);
router.post('/login',login);
router.get('/getUsers',getUsers);
router.get('/getUser/:id',getUserById);


module.exports = router;