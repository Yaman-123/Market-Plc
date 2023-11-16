const ProductModel = require('../model/productmodel');

const createProduct = (req, res) => {
    const product = req.body
    const newProduct = new ProductModel(product)
    try {
        newProduct.save()
        return res.status(201).json({
            message: "product saved successfully",
            result: newProduct,
            count: newProduct.count
        })
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
        })

    }
}
module.exports = { createProduct }