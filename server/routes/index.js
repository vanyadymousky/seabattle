var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(req.session.views, 'view');
  console.log(req.sessionID);
});

module.exports = router;
