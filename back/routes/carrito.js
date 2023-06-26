const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send("Estoy en Carrito");
});

module.exports = router;