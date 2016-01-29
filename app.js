var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// start : set the routers reside in /routes/index.js
var routes = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home');
var services = require('./routes/services');
var email_marketing = require('./routes/email_marketing');
var solutions = require('./routes/solutions');
var magento_joomla_opencart = require('./routes/magento_joomla_opencart');
// end : set the routers reside in /routes/index.js

var app = express();
// start : to read json file
var staticJsonData = require('./public/jsondata/static_data.json');
// save staticJsonData globaly 
app.locals.appdata = staticJsonData; 
// view engine setup and define the ejs paths inside views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// start: handel the url and send to the routers
app.use('/', routes);
app.get('/home', home);
app.get('/aboutus', home);
app.use('/users', users);
app.get('/contactus', home);
// web_design_services
app.get('/web_design_services', services);
app.get('/Web_Development', services);
app.get('/Web_Design', services);
app.get('/Flash_Animations', services);
app.get('/Logo_Designing', services);
app.get('/content_Management_System', services);
// EMail_Marketing
app.get('/EMail_Marketing', email_marketing);
app.get('/Social_Media_Marketing', email_marketing);
app.get('/Media_Services', email_marketing);
app.get('/EMail_Promotions', email_marketing);
app.get('/Revenue_Generetions', email_marketing);
app.get('/Lead_Generations', email_marketing);
// magento_joomla_opencart
app.get('/magento_joomla_opencart', magento_joomla_opencart);
app.get('/Ecommerce_web_development', magento_joomla_opencart);
app.get('/Theme_Costomaization', magento_joomla_opencart);
app.get('/Ecommerce_web_Maintenance', magento_joomla_opencart);
app.get('/Payment_Getway_Implementation', magento_joomla_opencart);
app.get('/Ecommerce_web_designing', magento_joomla_opencart);
app.get('/Ecommerce_web_applications', magento_joomla_opencart);
// solutions
app.get('/Android_APPS_Development', solutions);
app.get('/Java_Development_solutions', solutions);
app.get('/Staffing_Solutions', solutions);
app.get('/Desktop_Application_solutions', solutions);
// end: // handel the url and send to the routers


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
