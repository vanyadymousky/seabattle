var express = require('express');
var router = express.Router();

router.post('/save-name', function (req, res, next) {
  req.session.username = req.body.username;
  res.send('OK');
});

module.exports = router;
