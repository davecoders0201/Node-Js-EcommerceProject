var express = require("express");
var router = express.Router();
var multer = require("multer");
const auth = require("../middleware/auth");
const registerEndPoints = require("../controller/register");
const loginEndPoints = require("../controller/login");
const userList = require("../controller/userList");
const getSingle = require("../controller/getSingle");
const deleteUser = require("../controller/deleteUser");
const editUser = require("../controller/editUser");
const productData = require("../controller/products/productData");
const productDetails = require("../controller/products/productDetails");
const productEdit = require("../controller/products/productEdit");
const productgetSingle = require("../controller/products/productGetSingle");
const productDelete = require("../controller/products/productDelete");
const cartData = require("../controller/cart/cartData");
const userProfile = require("../controller/userProfile");
const paymentData = require("../controller/payment/paymentData");
const paymentDetails = require("../controller/payment/paymentDetails")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

// register end point
router.post("/register", upload.single("image"), registerEndPoints);
router.post("/login", loginEndPoints);
router.get("/get_all_user", userList);
router.get("/getSingle", getSingle);
router.delete("/deleteUser", deleteUser);
router.put("/editUser", editUser);
router.get("/productData", upload.single("image"), productData);
router.get("/productDetails", productDetails);
router.put("/productEdit", upload.single("image"), auth, productEdit);
router.get("/productGetSingle", auth, productgetSingle);
router.delete("/productDelete", auth, productDelete);
router.get("/cartData", cartData);
router.get("/userProfile", auth, userProfile);
router.post("/paymentData", paymentData);
router.post("/paymentDetails", paymentDetails);

module.exports = router;
