const { Router } = require("express");
const routes = new Router();

const ProductsController = require("./controllers/ProductsController");

routes.get("/products", ProductsController.productAction);

module.exports = routes;