const exphbs = require('express-handlebars')
const withHotloader = require('../../')

var app = require('express')()

const server = require('http').Server(app)

const engine = exphbs({ defaultLayout: 'main' })

const engineWithHotloader = process.env.NODE_ENV !== 'production'
  ? withHotloader(server, engine)
  : engine

app
  .engine('handlebars', engineWithHotloader)
  .set('view engine', 'handlebars')
  .get('/', (req, res) => { res.render('home') })

server.listen(3000, () => {
  console.log('listening on 3000')
})
