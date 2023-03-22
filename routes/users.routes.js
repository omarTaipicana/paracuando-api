const express = require("express")
const router = express.Router()
const passport = require('../libs/passport')
const {getUsers, addUser, getUser, updateUser, removeUser} = require('../controllers/user.controller')
const {userToken} = require('../controllers/auth.controller')

router.get('/', passport.authenticate('jwt', { session: false }), getUsers,
    userToken
    
  ); 

router.get('/:id', getUser)

router.put('/:id', passport.authenticate('jwt', { session: false }), updateUser,
  userToken
  )
  
  
module.exports = router