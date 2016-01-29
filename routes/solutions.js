var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/Android_APPS_Development', function(req, res, next) {
  res.render('Android_APPS_Development', { 
  		title: 'Android Apps Development',
  		pageName: 'Android_APPS_Development'
  });
});

router.get('/Java_Development_solutions', function(req, res, next) {
  res.render('Java_Development_solutions', { 
  		title: 'Java Development solutions',
  		pageName: 'Java_Development_solutions'
  });
});

router.get('/Staffing_Solutions', function(req, res, next) {
  res.render('Staffing_Solutions', { 
  		title: 'Staffing Solutions',
  		pageName: 'Staffing_Solutions'
  });
});

router.get('/Desktop_Application_solutions', function(req, res, next) {
  res.render('Desktop_Application_solutions', { 
  		title: 'Desktop Application solutions',
  		pageName: 'Desktop_Application_solutions'
  });
});


module.exports = router;
