var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/easyreading')
});

router.get('/index', function(req, res, next) {
    res.redirect('/easyreading')
});

module.exports = router;
