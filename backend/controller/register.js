var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const auth = require("./auth");
const RegisterModel = require("../models/registerModel");

const register = function (request, response) {
  bcrypt.hash(request.body.password, 10).then((hashedPassword) => {
    // create a new user instance and collect the data
    const user = new RegisterModel({
      your_name: request.body.your_name,
      email: request.body.email,
      password: hashedPassword,
      reenter_password: hashedPassword,
    });

    // save the new user
    user
      .save()
      .then((result) => {
        console.log("RESULT-", result);
        response.status(201).send({
          message: "User Created Successfully",
          result,
        });
      })
      .catch((err) => {
        console.log("ERROR-", err);
        response.status(500).send({
          message: "Error creating user",
          err,
        });
      });
  });
};
module.exports = register;
