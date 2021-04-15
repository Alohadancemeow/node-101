// # Product Service : Prosess

// # Create Model
class Product {
    constructor(id, name, image, price, stock) {
        this.id = id,
            this.name = name,
            this.image = image,
            this.price = price,
            this.stock = stock
    }
}

// # Create Objects
const products = [
    new Product(1, "Mackbook", "", 90000, 0),
    new Product(2, "Mackbook Air", "", 50000, 10),
]
// # Create ProductID
let count = products.length



// # GET:
exports.findAll = () => products

// # GET BY QUERY:
exports.findByPrice = (min, max) => products.filter(product => product.price >= min && product.price <= max)

// # GET BY ID:
exports.findById = (id) => products.filter(product => product.id == id)

// # POST:
exports.add = (product) => {
    count = count + 1
    const productNew = new Product(count, product.name, "", product.price, product.stock)
    products.push(productNew)
    return productNew
}

// # PUT: 
exports.update = (id, product) => {
    const index = products.findIndex(product => product.id == id)
    if (index !== -1) {
        const productUpdate = new Product(Number(id), product.name, "", product.price, product.stock)
        products[index] = productUpdate
        return productUpdate
    }
    return null
}

// # DELETE:
exports.remove = (id) => {
    const index = products.findIndex(product => product.id == id)
    if (index !== -1) {
        products.splice(index, 1)
        return true
    } 
    return false
}