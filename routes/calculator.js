var express = require("express");
var calculatorSvc = require("../services/calculator");
var router = express.Router();

/* document the calculator usage */
router.get("/", function (req, res) {
  console.log("calculator docs running...");
  res.render("CalculatorDocs", { title: "CalculatorDocs" });
});

// calculate the sum of two numer
router.post("/", function (req, res) {
  console.log("calculator running ...");
  const payload = req.body;
  var value = calculatorSvc.sum(payload.h, payload.w);

  res.json({ h: payload.h, y: payload.w, imc: value });
});

module.exports = router;
