const exphbs = require('express-handlebars')
const withHotloader = require('../')

var app = require('express')()

const server = require('http').Server(app)

const engine = process.env.NODE_ENV !== 'production'
  ? withHotloader(server, exphbs)
  : exphbs

app
  .engine('handlebars', engine({ defaultLayout: 'main' }))
  .set('view engine', 'handlebars')
  .get('/', (req, res) => { res.render('home') })

server.listen(3000, () => {
  console.log('listening on 3000')
})
