var express = require("express");
var router = express.Router();
// const auth = require("./auth");
const ProductModel = require("../../models/productModel");

const productDetails = function (request, response) {
  ProductModel.find()
    .then((result) => {
      console.log("RESULT-", result);
      response.send({ result: result });
    })
    .catch((err) => {
      console.log("Error whiLE FETCHING DATA-", err);
      response.send({ err });
    });
};

module.exports = productDetails;
