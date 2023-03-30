const { Router } = require('express');
const router = Router();
const { userRegister } = require('../controllers/User/postUserRegister');
const { userLogin } = require('../controllers/User/postUserLogin');


router.post('/register', userRegister);
router.post('/login', userLogin);


module.exports= router