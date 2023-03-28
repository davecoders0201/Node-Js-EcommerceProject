const express = require("express");
const PaymentModel = require("../../models/paymentModel");

const app = express();

const paymentData = function (request, response) {
  const payment = new PaymentModel({
    CardNumber: request.body.CardNumber,
    ExpiryDate: request.body.ExpiryDate,
    Cvc: request.body.Cvc,
    postalCode: request.body.postalCode
  });
  payment
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
module.exports = paymentData;
