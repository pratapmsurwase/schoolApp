var mongoose = require('mongoose')
const passport = require('passport')
var User = mongoose.model('User') 
const _ = require('lodash')

module.exports.register = (req, res, next) => {
   var user = new User()
   user.fullName = req.body.fullName,
   user.email = req.body.email,
   user.password = req.body.password,
   user.DOB = req.body.DOB,
   user.Address = req.body.Address
   user.ParentPhone1  = req.body.ParentPhone1 
   user.ParentPhone2  = req.body.ParentPhone2 
   user.CreationDateAt =Date.now() 
   user.studentData = {
    English : req.body.English,
    Matha : req.body.Math,
    Hindi : req.body.Hindi
   }

   User.findOne({fullName:user.fullName}, (err, data) => { 
    if( data) { 
        console.log(data)
      console.log('Student FullName is already used '  )
      return res.status(422).json('Email Address or FullName is already used ')
      
 }      
  else {
    user.save((err, doc) => {
        if (!err) 
            res.send(doc);
    })  
}
})
   console.log('Inside register function')
} 

module.exports.authenticate = (req, res, next) => {
 //call for authentication
 passport.authenticate('local', (err, user, info) => {
 //error from passport midddleware
 if(err)  return res.status(400).json(err)
 
 // Registered user got 
 else if(user)  return res.status(200).json({"token":  user.generateJWT() })
 
// Unknown user or wrong password
else  return res.status(404).json(info)
 
}) (req, res)
 }

 module.exports.userProfile = (req, res, next) => {
     User.findOne({_id: req._id},(err, user) =>{
      if(!user)  
      return res.status(404).json({status: false, message: 'User record not found'})
    else 
     return res.status(200).json({status: true, user:_.pick(user, ['fullName', 'email', 'DOB', 'Address', 'ParentPhone1', 
     'ParentPhone2','CreationDateAt', 'studentData.English','studentData.Matha','studentData.Hindi' ])})
          } )
 }
 
