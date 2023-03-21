const express = require('express')
<<<<<<< HEAD
const routesUsers = require('./users.routes')
=======
const swaggerUi = require("swagger-ui-express")
const swagerDoc = require("../swaguer.json")
// const routesUsers = require('./users.routes')
>>>>>>> 1eb7519eba31078c3767a66054323f9030b32153

// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require('./auth.routes')
const { route } = require('./auth.routes')

function routerModels(app) {
  const router = express.Router()

  app.use('/api/v1', router)
  router.use('/auth', routesAuth)
<<<<<<< HEAD

=======
  app.use("/api/v1/docs",swaggerUi.serve, swaggerUi.setup(swagerDoc))
  router.use('/users', routesUsers )
>>>>>>> 1eb7519eba31078c3767a66054323f9030b32153
}

module.exports = routerModels
