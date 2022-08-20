const express = require('express');
const router = new express.Router();
const {signUp, login, getUsers, getUserById, logout} = require('../controllers/userController')

router.post('/signUp',signUp);
router.post('/login',login);
router.post('/logout',logout);
router.get('/getUsers',getUsers);
router.get('/getUser/:id',getUserById);


module.exports = router;