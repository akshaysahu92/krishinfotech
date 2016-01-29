var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
   res.render('home', { 
  		title: 'Krish InfoTech Solutions | Home',
  		pageName: 'home'
  });
});
router.get('/aboutus', function(req, res, next) {
   res.render('aboutus', { 
  		title: 'About Us',
  		pageName: 'aboutus'
  });
});
router.get('/contactus', function(req, res, next) {
   res.render('contactus', { 
  		title: 'Contact Us',
  		pageName: 'contactus'
  });
});
module.exports = router;
