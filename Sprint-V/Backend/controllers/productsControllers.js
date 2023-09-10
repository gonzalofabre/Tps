const Products = require("../models/products");

module.exports = {
  createNewProduct: async (req, res) => {
    const { title, description, image, category, price } = req.body;
    try {
      const newProduct = await Products.create({
        title,
        description,
        category,
        image,
        price,
      });

      if (newProduct) {
        return res
          .status(201)
          .json({ message: "New Product added", data: newProduct });
      } else {
        return res.status(400).json({ message: "Bad request, invalid Data" });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ status: 500, message: "Internal Server Error" });
    }
  },
  // updateProduct: async (req, res) => {
  //   const productId = req.params.id 
  //   const { title, description, image, category, price } = req.body
  //   try {
  //     const product = await Products.findByPk(productId);
  //     if(!product){

  //     }
  //     const updatedProduct = await Products.update({

  //     }{
  //       title,
  //       description,
  //       category,
  //       image,
  //       price,
  //     });
  // },

  // Controllers ...
  getProductsController: async (req, res) => {
    return res.status(req.statusCode).json(req.dataToSend)
  },

  
};
