const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 8080
require('./config/mongoose')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

app.use(routes)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})