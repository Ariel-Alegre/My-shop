const { Router } = require('express');
const router = Router();
const { userRegister } = require('../controllers/User/postUserRegister')

router.post('/', userRegister)

module.exports= router