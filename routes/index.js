var express = require('express');
var axios = require('axios')
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

router.get('/admin', async function(req, res, next) {
  try {
    axios.get('http://localhost:3000/users')
      .then(function(result){
        
        const userList = result.data

        let data = {
          admin:true,
          title: 'Admin',
          userList
        };
        res.render("userList.html",data)
      })
  } catch (error) {
    log.error(error)
  }
})

router.get('/admin/:userId', async function(req, res, next) {
  try {
    const id = req.params.userId
    axios.get(`http://localhost:3000/users/${id}`)
      .then(function(result){
        const user = result.data
        log.info(user)
        let data = {
          admin:true,
          title: "User Detail",
          user
        };
        res.render("userDetail.html",data)
      })
  } catch (error) {
    log.error(error)
  }
})

module.exports = router