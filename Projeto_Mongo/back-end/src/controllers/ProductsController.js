const Product = require('../models/Product')

class ProductsController {
  productAction(req, res) {
    Product.getAll(req, res)
  }
}

module.exports = new ProductsController;