var express = require("express");
var multer = require("multer");
var router = express.Router();
const registerEndPoints = require("../controller/register");
const loginEndPoints = require("../controller/login");
const userList = require("../controller/userList");
const getSingle = require("../controller/getSingle");
const deleteUser = require("../controller/deleteUser");
const editUser = require("../controller/editUser");
// const cartData = require("../controller/cartData");
// const cartDetails = require("../controller/cartDetails");
const productData = require("../controller/products/productData");
const productDetails = require("../controller/products/productDetails");
// const tabletData = require("../controller/tabletData");
// const watchData = require("../controller/watchData");
// const watchDetails = require("../controller/watchDetails");
// const monitorData = require("../controller/monitorData");
// const monitorDetails = require("../controller/monitorDetails");

const auth = require("../middleware/auth");
const productEdit = require("../controller/products/productEdit");
const productgetSingle = require("../controller/products/productGetSingle");
const productDelete = require("../controller/products/productDelete");
// const tabletDetails = require("../controller/tabletDetails");

var upload = multer({ dest: "../uploads/" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads");
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

router.post("/productData", upload.single("image"), productData);
router.get("/productDetails", productDetails);
router.put("/productEdit", upload.single("image"), productEdit);
router.get("/productGetSingle", productgetSingle);
router.delete("/productDelete", productDelete);

module.exports = router;
