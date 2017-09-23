var express = require('express');
var router = express.Router();
var controllers = require('../controllers')





router.post('/create_user', function(req, res, next) {
  
    var controller = controllers.user;
    var params = {
        username: req.body.username,
        email: req.body.email,
    };
    controller.create_user(params)
        .then((response) => {
            res.json({
                confirmation: 'success',
                data: response
            })
        })
        .catch((err) => {
            res.json({
                confirmation: 'error',
                message: err
            })
        })
});


router.post('/update_user', function(req, res, next) {
    
      var controller = controllers.user;
      var id = req.body.id;
      var params = {
          username: req.body.username,
          email: req.body.email,
      };
      controller.update_user(id, params)
          .then((response) => {
              res.json({
                  confirmation: 'success',
                  data: response
              })
          })
          .catch((err) => {
              res.json({
                  confirmation: 'error',
                  message: err
              })
          })
});


router.post('/delete_user', function(req, res, next) {
    
      var controller = controllers.user;
      var id = req.body.id;
      controller.delete_user(id)
          .then(() => {
              res.json({
                  confirmation: 'success',
              })
          })
          .catch((err) => {
              res.json({
                  confirmation: 'error',
                  message: err
              })
          })
});


router.post('/user_list', function(req, res, next) {
    
      var controller = controllers.user;
      var params = {
        email: 'roytest@mailinator.com'
      };
      controller.user_list(params)
          .then((response) => {
              res.json({
                  confirmation: 'success',
                  data: response
              })
          })
          .catch((err) => {
              res.json({
                  confirmation: 'error',
                  message: err
              })
          })
});


router.post('/user_posts', function(req, res, next) {
    
      var controller = controllers.user;
      controller.user_posts()
          .then((response) => {
              res.json({
                  confirmation: 'success',
                  data: response
              })
          })
          .catch((err) => {
              res.json({
                  confirmation: 'error',
                  message: err
              })
          })

    

});

module.exports = router;
