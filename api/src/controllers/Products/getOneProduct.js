const { Products } = require("../../database/models")

module.exports = {
    oneProduct: async (req, res) => {
        const { id } = req.params
        try {
            const product = await Products.findByPk(id)
            product 
            ? res.status(200).send(product) 
            : res.status(404).send({msg: "No se encontro el producto"})
           

        } catch (error) {
            console.log(error);
        }
    }
}