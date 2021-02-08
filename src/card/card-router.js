const express = require('express')
const cardRouter = express.Router()
const bodyParser = express.json()

const cards = [{
    id: 1,
    title: 'Task One',
    content: 'This is card one'
}]

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

app.use(express.json())

app.get('/card', (req, res) => {
      res
      .json(cards);
});

module.exports = cardRouter