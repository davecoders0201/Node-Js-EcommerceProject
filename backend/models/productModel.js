const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    description: { type: String, require: true },
    rating: { type: Number, require: true },
  },
  { collection: "productData" }
);
module.exports = mongoose.model("productData", productSchema);
