module.exports = function (listener, engine) {
  var hotView = require('hotloader')(listener).registerView

  return function (viewPath, opts, callback) {
    var watchPath = (opts && opts.settings && opts.settings.views) || '.'
    var getHtml = function (cb) { engine(viewPath, opts, cb) }

    hotView(watchPath, getHtml, callback)
  }
}
