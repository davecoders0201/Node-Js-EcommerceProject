var express = require("express");
var router = express.Router();
// const auth = require("./auth");
const LaptopModel = require("../models/laptopModel");

const laptopDetails = function (request, response) {
  LaptopModel.find()
    .then((result) => {
      console.log("RESULT-", result);
      response.send({ result: result });
    })
    .catch((err) => {
      console.log("Error whiLE FETCHING DATA-", err);
      response.send({ err });
    });
};

module.exports = laptopDetails;
