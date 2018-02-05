const pug = require('pug')
const withHotloader = require('../../')

var app = require('express')()

const server = require('http').Server(app)

const engine = process.env.NODE_ENV !== 'production'
  ? withHotloader(server, pug.__express)
  : pug.__express

app
  .engine('pug', engine)
  .set('view engine', 'pug')
  .get('/', (req, res) => { res.render('home') })

server.listen(3000, () => {
  console.log('listening on 3000')
})
