const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const product = new Schema({
  category: { type: String },
  product: {
    productName: { type: String },
    productPrice: { type: String },
    productSize: { type: String },
    productColor: { type: String },
    //productImage: { type: String },
  },
});
const productModel = mongoose.model("product", product);
module.exports = productModel;
