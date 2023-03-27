var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const auth = require("./auth");
const RegisterModel = require("../models/registerModel");

const editUser = function (request, response) {
    RegisterModel.findByIdAndUpdate(request.body._id,
        {
            your_name: request.body.your_name,
            email: request.body.email,
            // password: hashedPassword,
            // reenter_password: hashedPassword,
          

        })
        .then((result) => {
            console.log("RESULT-",result);
            response.send({result:result})
          })
          .catch((err) => {
            console.log("Error whiLE FETCHING DATA-",err);
            response.send({err})
          });
    
    
   
  
};
module.exports = editUser;
