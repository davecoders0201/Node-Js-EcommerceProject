var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const auth = require("./auth");
const ProductModel = require("../../models/productModel");

const productEdit = function (request, response) {
  ProductModel.findByIdAndUpdate(request.body._id, {
    title: request.body.title,
    price: request.body.price,
    image: process.env.BACKEND_URL + request.file.path,
    description: request.body.description,
    rating: request.body.rating,
  })
    .then((result) => {
      console.log("RESULT-", result);
      response.send({ result: result });
    })
    .catch((err) => {
      console.log("Error whiLE FETCHING DATA-", err);
      response.send({ err });
    });
};
module.exports = productEdit;
