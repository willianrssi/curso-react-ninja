'use strict'

const express = require('express')
const app = express()
const { join } = require('path')
const compression = require('compression')

app.use(compression())

app.use(express.static(join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(3000, () => console.log('Listening on port 3000'))
