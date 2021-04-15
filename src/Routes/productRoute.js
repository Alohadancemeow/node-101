// # Product Router -> productController

const router = require('express').Router()
const productController = require('../controllers/productController');


// # GET: All : http://localhost:3000/products
// # -> getProducts
router.get('/', productController.getProducts)

// # GET BY QUERY: http://localhost:3000/products/price?min=50000&max=700000
// # ->getProductByPrice
router.get('/price', productController.getProductByPrice)

// # GET BY ID: http://localhost:3000/products/id
// # -> getProduct
router.get('/:id', productController.getProduct)

// # POST: -> addProduct
router.post('/', productController.addProduct)

// # PUT: -> updateProduct
router.put('/:id', productController.updateProduct)

// # DELETE: -> deleteProduct
router.delete('/:id', productController.deleteProduct)


module.exports = router