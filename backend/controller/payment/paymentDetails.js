var express = require("express");
var router = express.Router();
// const auth = require("./auth");
const PaymentModel = require("../../models/paymentModel");

const paymentDetails = function (request, response) {
  PaymentModel.find()
    .then((result) => {
      console.log("RESULT-", result);
      response.send({ result: result });
    })
    .catch((err) => {
      console.log("Error whiLE FETCHING DATA-", err);
      response.send({ err });
    });
};

module.exports = paymentDetails;
