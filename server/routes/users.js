var express = require('express');
const debug = require('debug')('seabattle:server');
var router = express.Router();

router.post('/save-name', function (req, res, next) {
  req.session.username = req.body.username;
  res.send('OK');
});

router.get('/clear', function (req, res, next) {
  req.session.username = undefined;
  debug('Username cleared');
  res.send('Done.');
});

module.exports = router;
