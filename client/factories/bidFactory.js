app.factory('bidFactory', function($http, $location) {
  var factory = {};

  factory.createBid = function(product, cb) {
    $http.post('/createBid', product).then(function(output) {
      cb(output.data)
    })
  }

  factory.getBids = function(cb) {
    $http.get('/getBids').then(function(data) {
      cb(data.data)
    })
  }

  factory.endBid = function(cb) {
    $http.get('/endBid').then(function(data) {
      cb(data.data)
    })
  }

  factory.startBid = function(cb) {
    $http.post('/startBid').then(function(output) {
      cb(output.data)
    })
  }

  return factory
})
