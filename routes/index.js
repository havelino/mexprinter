var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index.njk', {
        title : "Mextech Mexico"
        });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index.njk', {
        title : "Mextech Mexico"
        });
});

router.get('/courses', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  res.render('courses.njk', {
        title : "Mextech Cursos"
        });
});

router.get('/services', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  res.render('services.njk', {
        title : "Servicios Mextech"
        });
});

router.get('/products', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  res.render('products.njk', {
        title : "Mextech Productos"
        });
});

router.get('/about', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  res.render('about.njk', {
        title : "Acerca de nosotros"
        });
});

router.get('/contact', function(req, res, next) {
  res.render('contact.njk', {
        title : "Contacto Mextech"
        });
});

router.get('/slicer', function(req, res, next) {
  res.render('slicer', {
        title : "Mextech Slicer"
        });
});

module.exports = router;
