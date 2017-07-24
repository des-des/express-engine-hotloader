# Express engine hotloader

 :fire: :fire:

```js
const app = require('express')()
const server = require('http').Server(app)

const exphbs  = require('express-handlebars')
const exphbsHot = require('express-engine-hotloader')(server, exphbs)

app
  .engine('handlebars', exphbsHot())
```

Enhances an express template engine with hotloading. Without refreshing the page, The DOM gets updated whenever your underlying templates change.

Built on top of [hotloader](https://github.com/des-des/hotloader), express-engine-hotloader uses sockets and and a virtual DOM to achieve super fast :fire: html hotloading :fire_engine:.

##### No configuration required :ok_hand:. Made with :heart: by [des-des](https://github.com/des-des)

###### Contributions welcome :sparkles:
