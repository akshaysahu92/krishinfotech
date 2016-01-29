var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/Social_Media_Marketing', function(req, res, next) {
  res.render('Social_Media_Marketing', { 
  		title: 'Social Media Marketing',
  		pageName: 'Social_Media_Marketing'
  });
});

router.get('/EMail_Marketing', function(req, res, next) {
  res.render('EMail_Marketing', { 
  		title: 'E-Mail Marketing',
  		pageName: 'EMail_Marketing'
  });
});

router.get('/Media_Services', function(req, res, next) {
  res.render('Media_Services', { 
  		title: 'Media Services',
  		pageName: 'Media_Services'
  });
});

router.get('/EMail_Promotions', function(req, res, next) {
  res.render('EMail_Promotions', { 
  		title: 'E-Mail Promotions',
  		pageName: 'EMail_Promotions'
  });
});

router.get('/Revenue_Generetions', function(req, res, next) {
  res.render('Revenue_Generetions', { 
  		title: 'Revenue Generetions',
  		pageName: 'Revenue_Generetions'
  });
});

router.get('/Lead_Generations', function(req, res, next) {
  res.render('Lead_Generations', { 
  		title: 'Lead Generations',
  		pageName: 'Lead_Generations'
  });
});

module.exports = router;
