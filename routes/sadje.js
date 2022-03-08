const express = require('express')
const router = express.Router()

// GET Route
router.get('/', (req, res) => {
  res.send('Sadje')
})


// POST Route
router.post('/', (req, res) => {

})

module.exports = router
