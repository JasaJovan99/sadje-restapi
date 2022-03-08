const express = require('express')
const app = express()
const port = 3000

// Routes
const sadjeRoute = require('./routes/sadje')

app.use('/sadje', sadjeRoute)

app.get('/', (req, res) => {
  res.send('index route')
})

// zacnemo node server na portu 3000
app.listen(port, () => {
  console.log(`Strežnik teče na portu ${port}!`)
})
