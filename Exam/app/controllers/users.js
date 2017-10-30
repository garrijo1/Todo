var express = require('express'),
router = express.Router(), 

mongoose = require('mongoose'),
User = mongoose.model('users');
//variables above assist in routing requests to schemas
module.exports = function (app, config) {
app.use('/api', router);

router.get('/users', function (req, res, next){
    console.log('Get all users', 'verbose');

   var query = User.find()
   .then(result => {
    if(result && result.length) {
        res.status(200).json(result);
    } else {
        res.status(404).json({message: "No users"});
    }
   })
   .catch(err => {
     return next(err);
   });
});
//above routes request to "get" all information already posted to table
router.get('/users/:userId', function (req, res, next){
    console.log('Get user'+ req.params.userId, 'verbose');

   User.findById(req.params.userId)
               .then(user => {
                   if(user){
                       res.status(200).json(user);
                   } else {
                       res.status(404).json({message: "No user found"});
                   }
               })
               .catch(error => {
                   return next(error);
               });
       });    
//above routes request to "get" certain information based on required inputs
router.post('/users', function(req, res, next){
    console.log('Create user', 'verbose');

   var user = new User(req.body);
    user.save()
   .then(result => {
       res.status(201).json(result);
   })
   .catch( err => {
      return next(err);
   });
 });

};



 

