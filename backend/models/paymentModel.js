const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema(
  {
    CardNumber: { type: Number, require: true },
    ExpiryDate: { type: Number, require: true },
    Cvc: { type: Number, require: true },
    postalCode: { type: Number, require: true },
  },
  { collection: "paymentData" }
);
module.exports = mongoose.model("paymentData", paymentSchema);
