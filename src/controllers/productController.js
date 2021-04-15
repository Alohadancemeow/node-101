// # Product Controller -> productService

const productService = require('../services/productService');

// # GET: -> findAll
exports.getProducts = (req, res) => res.json(productService.findAll())

// # GET BY QUERY: -> findByPrice
exports.getProductByPrice = (req, res) => {
    const { min, max } = req.query
    res.json(productService.findByPrice(min, max))
}

// # GET BY ID: -> findById
exports.getProduct = (req, res) => {
    const result = productService.findById(req.params.id)
    if (result.length > 0) {
        res.json(result[0])
    } else {
        res.status(404).json({})
    }
}

// # POST: -> add //201 created
exports.addProduct = (req, res) => res.status(201).json(productService.add(req.body))


// # PUT: -> update
exports.updateProduct = (req, res) => {
    const result = productService.update(req.params.id, req.body)
    if (result) {
        res.json(result)
    } else {
        res.status(404).json({})
    }
}

// # DELETE: -> remove
exports.deleteProduct = (req, res) => {
    const result = productService.remove(req.params.id)
    if (result) {
        res.status(204).json() // 204 no content
    } else {
        res.status(404).json({})
    }
}