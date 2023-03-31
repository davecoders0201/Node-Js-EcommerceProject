const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Manav:manav@cluster0.dmzfvgy.mongodb.net/Ecommerce:3000?retryWrites=true&w=majority")

  .then((result) => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(err);
  });