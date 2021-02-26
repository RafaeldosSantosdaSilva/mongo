const connect = require('../config/connect');

class Product {
  getAll(req, res) {
    global.conn.collection('produtos').find({}).toArray((err, result) => {
      if(!err)
        res.json(result);
      else
        console.log(err);
    }
  )}
}

module.exports = new Product;