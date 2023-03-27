const express = require('express')
const router = express.Router()
const qr = require('qrcode')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const options = req.body
  const data = `${options.name}\n${options.address}`

  qr.toDataURL(data, (err, url) => {
    if (err) throw err;
    res.render('index', { qrCode: url, options: options })
  })
})

module.exports = router