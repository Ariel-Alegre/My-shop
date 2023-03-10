const { Router } = require('express');
const router = Router();
const { allProducts } = require('../controllers/Products/getAllProducts');
const { oneProduct } = require('../controllers/Products/getOneProduct');

router.get("/", allProducts);
router.get("/:id", oneProduct);




module.exports = router