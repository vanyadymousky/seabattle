var express = require('express');
var router = express.Router();

function basicRoute(req, res, next) {
  console.log(req.session);
  res.render('index', {
    id: req.sessionID,
  });
}

/* GET home page. */
router.get('/', basicRoute);

router.get('/lobby', basicRoute);

module.exports = router;
