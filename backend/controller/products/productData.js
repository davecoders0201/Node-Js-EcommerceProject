const express = require("express");
var multer = require("multer");
const ProductModel = require("../../models/productModel");

const app = express();

const productData = function (request, response) {
  const product = new ProductModel({
    title: request.body.title,
    price: request.body.price,
    image: process.env.BACKEND_URL + request.file.path,
    description: request.body.description,
    rating: request.body.rating,
  });
  product
    .save()
    .then((result) => {
      console.log("RESULT-", result);
      response.send({ result: result });
    })
    .catch((err) => {
      console.log("Error whiLE FETCHING DATA-", err);
      response.send({ err });
    });
};
module.exports = productData;
