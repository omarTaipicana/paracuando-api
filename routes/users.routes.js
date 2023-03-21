const express = require("express")
const router = express.Router()
const passport = require('../libs/passport')
const {getUsers, addUser, getUser, updateUser, removeUser} = require('../controllers/user.controller')
const {userToken} = require('../controllers/auth.controller')

router.get('/', passport.authenticate('jwt', { session: false }),
    userToken
  ); 
  
module.exports = router