const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send("Estoy en Registro");
});

module.exports = router;