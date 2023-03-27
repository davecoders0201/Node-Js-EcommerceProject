var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const auth = require("./auth");
const RegisterModel = require("../models/registerModel");

const getSingle = function (request, response) {
    RegisterModel.findById(request.body._id)
    .then((result) => {
        console.log("RESULT-",result);
        response.send({result:result})
      })
      .catch((err) => {
        console.log("Error whiLE FETCHING DATA-",err);
        response.send({err})
      });

}

module.exports = getSingle;
