const express = require('express')
const swaggerUi = require("swagger-ui-express")
const swagerDoc = require("../swaguer.json")
// const routesUsers = require('./users.routes')

// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require('./auth.routes')

function routerModels(app) {
  const router = express.Router()

  app.use('/api/v1', router)
  router.use('/auth', routesAuth)
  app.use("/api/v1/docs",swaggerUi.serve, swaggerUi.setup(swagerDoc))

}

module.exports = routerModels
