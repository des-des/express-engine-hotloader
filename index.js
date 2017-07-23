module.exports = function(listener, initEngine) {
  var hotView = require('hotloader')(listener).registerView

  return function() {
    var oldEngine = initEngine.apply(initEngine, [].slice.call(arguments))

    return (function(viewPath, opts, callback) {
      var watchPath = (opts && opts.settings && opts.settings.views) || '.'
      var getHtml = function (cb) { oldEngine(viewPath, opts, cb) }

      hotView(watchPath, getHtml, callback)
    }).bind(oldEngine)
  }
}
