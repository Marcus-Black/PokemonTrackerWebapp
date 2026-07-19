const express = require("express");
const authenticate = require("../authenticate");
const router = express.Router();

router.use(authenticate);

router.route("/", (req, res) => {
res.send("Okay");
})

module.exports = router;