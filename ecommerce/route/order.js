const expreess = require("express");
const router = expreess.Router();

const { getOrders, store } = require("../controller/order");
const { checkAuthentication, isBuyer } = require("../middleware/auth");

router.get("/orders", checkAuthentication, getOrders)
router.post("/orders", checkAuthentication, isBuyer, store)

module.exports = router;