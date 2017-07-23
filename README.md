# Express engine hotloader

```js
const app = require('express')()
const server = require('http').Server(app)

const exphbs  = require('express-handlebars')
const exphbsHot = require('express-engine-hotloader')(server, exphbs)

app
  .engine('handlebars', exphbsHot())
```

Enhances an express template engine with hotloading. The DOM with be dynamically updated on changes to your templates, no reload necessary.

Build on top of [hotloader](https://github.com/des-des/hotloader), express-engine-hotloader uses sockets and and a virtual dom to achieve super fast html hotloading.

##### No configuration required. Made with :heart: by [des-des](https://github.com/des-des)

###### Contributions welcome :sparkles: 
