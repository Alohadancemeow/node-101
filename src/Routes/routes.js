const router = require('express').Router()

// # All routes here.
// # use productRouter : http://localhost:3000/products
router.use('/products', require('./productRoute'))

module.exports = router