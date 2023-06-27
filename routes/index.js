var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect('/skills')
});

//Do not export the object of the Router but the router itself.
//Don't use {}
module.exports = router;
