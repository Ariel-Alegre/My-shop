const { Products } = require("../../database/models")

module.exports = {
    allProducts: async (req, res) => {
        try {
            const products = await Products.findAll()
            products.length
                ? res.status(200).send(products)
                : res.status(404).send({ msg: "No existe los productos" })
        } catch (error) {
            console.log("[Error - allProducts - GET" ,error);
        }
    }
}