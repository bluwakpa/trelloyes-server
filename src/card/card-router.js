const express = require('express')

const cardRouter = express.Router()
const bodyParser = express.json()

cardRouter
  .route('/card')
  .get((req, res) => {
    // move implementation logic into here
  })
  .post(bodyParser, (req, res) => {
    // move implementation logic into here
  })

cardRouter
  .route('/card/:id')
  .get((req, res) => {
    // move implementation logic into here
  })
  .delete((req, res) => {
    // move implementation logic into here
  })

module.exports = cardRouter