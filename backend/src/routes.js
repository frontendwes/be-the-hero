const express = require('express')

const OngController = require('./../src/controllers/OngController')
const incidentController = require('./../src/controllers/incidentController')

const routes = express.Router();

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.post('/incidents', incidentController.create)
module.exports = routes;