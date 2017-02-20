var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index.html', {
        title : "Mexprint3r Mexico"
        });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index.html', {
        title : "Mexprint3r Mexico"
        });
});


router.get('/services', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  res.render('services.html', {
        title : "Mexprint3r Mexico"
        });
});

router.get('/about', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  res.render('about.html', {
        title : "Mexprint3r Mexico"
        });
});

router.get('/contact', function(req, res, next) {
  res.render('contact.html', {
        title : "Mexprint3r Mexico"
        });
});

router.get('/slicer', function(req, res, next) {
  res.render('slicer.html', {
        title : "Mexprint3r Mexico"
        });
});

module.exports = router;
