var express = require('express');
const debug = require('debug')('seabattle:server');
var router = express.Router();

const LOBBY_ROUTE = '/lobby';

function basicRoute(req, res, next) {
  debug('user is: ', req.session.username);
  res.render('index', {
    id: req.sessionID,
  });
}

/* GET home page. */
router.get('/', (req, res, next) => {
  if (req.session.username) {
    debug('redirected to lobby');
    res.redirect(LOBBY_ROUTE);
  } else {
    basicRoute(req, res, next);
  }
});

router.get(LOBBY_ROUTE, (req, res, next) => {
  if (!req.session.username) {
    debug('redirected to login');
    res.redirect('/');
  } else {
    basicRoute(req, res, next);
  }
});

router.get('/game/:gameId', basicRoute);

module.exports = router;
