const productModel = require("../model/product.model");

module.exports = {
  products: (req, res) => {
    var productDetails = new productModel({
      category: req.body.category,
      product: {
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productSize: req.body.productSize,
        productColor: req.body.productColor,
        //productImage: { type: String },
      },
    });

    productDetails
      .save()
      .then((data) => {
        if (data) {
          res.json({
            status: true,
            data: data,
            message: "Product Added Sucessfully",
          });
          res.end();
        } else {
          res.json({ status: false, message: "Something Went Wrong" });
          res.end();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
