var express = require('express');
var router = express.Router();

router.post('/save-name', function (req, res, next) {
  req.session.userData.name = req.body.username;
  console.log(req.session.userData);
  res.send('OK');
});

module.exports = router;
