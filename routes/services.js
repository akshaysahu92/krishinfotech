var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/web_design_services', function(req, res, next) {
  res.render('web_design_services', { 
  		title: 'Web Design Services',
  		pageName: 'web_design_services'
  });
});

router.get('/Web_Development', function(req, res, next) {
  res.render('Web_Development', { 
  		title: 'Web Development',
  		pageName: 'Web_Development'
  });
});

router.get('/Web_Design', function(req, res, next) {
  res.render('Web_Design', { 
  		title: 'Web Design',
  		pageName: 'Web_Design'
  });
});

router.get('/Flash_Animations', function(req, res, next) {
  res.render('Flash_Animations', { 
  		title: 'Flash Animations',
  		pageName: 'Flash_Animations'
  });
});

router.get('/Logo_Designing', function(req, res, next) {
  res.render('Logo_Designing', { 
  		title: 'Logo Designing',
  		pageName: 'Logo_Designing'
  });
});

router.get('/content_Management_System', function(req, res, next) {
  res.render('content_Management_System', { 
  		title: 'content Management System',
  		pageName: 'content_Management_System'
  });
});

module.exports = router;
