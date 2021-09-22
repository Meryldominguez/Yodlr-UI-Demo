var express = require('express');
var router = express.Router();
var _ = require('lodash');
var logger = require('../lib/logger');
var log = logger();

router.get('/', async function(req, res, next) {
  let  data = {
    admin:true,
    title: 'Home'
  }

  res.render('index.html', data)
})

router.get('/register', async function(req, res, next) {
  let  data = {
    admin:true,
    title: 'Register'
  }
  res.render('register.html', data)
})

module.exports = router