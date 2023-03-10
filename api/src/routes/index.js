const { Router } = require('express');
const router = Router()
const productsRouter = require("./ProductsRouters")
const  usersRouter = require("./UsersRouters");


router.use("/products", productsRouter);
router.use("/user", usersRouter);


module.exports= router