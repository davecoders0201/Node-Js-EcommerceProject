var express = require("express");
var multer = require("multer");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const auth = require("./auth");
const RegisterModel = require("../models/registerModel");

const register = function (request, response) {
  console.log("Image", process.env.BACKEND_URL);
  bcrypt.hash(request.body.password, 10).then((hashedPassword) => {
    // create a new user instance and collect the data
    const user = new RegisterModel({
      your_name: request.body.your_name,
      email: request.body.email,
      password: hashedPassword,
      reenter_password: hashedPassword,
      image: process.env.BACKEND_URL + request.file.path,
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
