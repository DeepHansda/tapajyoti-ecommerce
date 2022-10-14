const express = require('express');
const router = new express.Router();
const {signUp, login, getUsers, getUserById, logout, userDetails, deleteUser} = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('/signUp',signUp);
router.post('/login',login);
router.post('/logout',logout);
router.get('/getUsers',auth,getUsers);
router.get('/userDetails',auth,userDetails);
router.get('/getUser/:id',getUserById);
router.delete('/deleteUser/:id',deleteUser);



module.exports = router;