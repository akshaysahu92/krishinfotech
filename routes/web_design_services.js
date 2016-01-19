var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/web_design_services', function(req, res, next) {
  res.render('web_design_services', { 
  		title: 'Web Design Services',
  		pageName: 'web_design_services'
  });
});

module.exports = router;
