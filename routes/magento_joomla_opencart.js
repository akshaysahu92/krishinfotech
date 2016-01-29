var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/magento_joomla_opencart', function(req, res, next) {
  res.render('magento_joomla_opencart', { 
  		title: 'Magento Joomla Opencart',
  		pageName: 'magento_joomla_opencart'
  });
});

router.get('/Ecommerce_web_development', function(req, res, next) {
  res.render('Ecommerce_web_development', { 
  		title: 'Ecommerce web development',
  		pageName: 'Ecommerce_web_development'
  });
});

router.get('/Theme_Costomaization', function(req, res, next) {
  res.render('Theme_Costomaization', { 
  		title: 'Theme Costomaization',
  		pageName: 'Theme_Costomaization'
  });
});

router.get('/Ecommerce_web_Maintenance', function(req, res, next) {
  res.render('Ecommerce_web_Maintenance', { 
  		title: 'E-Ecommerce web Maintenance',
  		pageName: 'Ecommerce_web_Maintenance'
  });
});

router.get('/Payment_Getway_Implementation', function(req, res, next) {
  res.render('Payment_Getway_Implementation', { 
  		title: 'Payment Getway Implementation',
  		pageName: 'Payment_Getway_Implementation'
  });
});

router.get('/Ecommerce_web_designing', function(req, res, next) {
  res.render('Ecommerce_web_designing', { 
  		title: 'Ecommerce Web Designing',
  		pageName: 'Ecommerce_web_designing'
  });
});

router.get('/Ecommerce_web_applications', function(req, res, next) {
  res.render('Ecommerce_web_applications', { 
      title: 'Ecommerce web applications',
      pageName: 'Ecommerce_web_applications'
  });
});

module.exports = router;
