const express = require('express')
const exphbs = require('express-handlebars')
const qr = require('qrcode')
const app = express()
const port = process.env.PORT || 8080

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const data = `${options.name}\n${options.address}`

  qr.toDataURL(data, (err, url) => {
    if (err) throw err;
    res.render('index', { qrCode: url, options: options })
  })
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})