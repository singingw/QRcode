const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 8080

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})