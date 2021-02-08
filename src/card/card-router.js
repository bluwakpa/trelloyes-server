const express = require('express')
const cardRouter = express.Router()
const bodyParser = express.json()
const { v4: uuid } = require('uuid')
const logger = require('../logger')
const { cards, lists } = require('../store')

// const cards = [{
//     id: 1,
//     title: 'Task One',
//     content: 'This is card one'
// }]

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
    const { title, content } = req.body

    app.post('/card', (req, res) => {
        const { title, content } = req.body;
    
        // cardRouter
        // .route('/card')
        // .get((req, res) => {/* code not shown */})
        // .post(bodyParser, (req, res) => {/* code not shown */})
    
        if (!title) {
            logger.error(`Title is required`);
            return res
              .status(400)
              .send('Invalid data');
          }
          
          if (!content) {
            logger.error(`Content is required`);
            return res
              .status(400)
              .send('Invalid data');
          }
          // get an id
            const id = uuid();
    
            const card = {
            id,
            title,
            content
            };
    
            cards.push(card);
    
            logger.info(`Card with id ${id} created`);
    
            res
             .status(201)
             .location(`http://localhost:8000/card/${id}`)
             .json(card);
    })
  })
  .delete((req, res) => {
    res.json(cards);
  })

module.exports = cardRouter