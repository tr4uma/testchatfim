require('dotenv').config()
const PORT = process.env.PORT || 3010
const express = require('express')
const app = express()

app.use(express.static('public/'));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})