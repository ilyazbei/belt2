app.controller('resultController', function($scope, bidFactory, $routeParams, $route, $location) {

  bidFactory.endBid(function(data) {

    if(data){
      $scope.maxBid = [ {amount: 0}, {amount: 0}, {amount: 0} ]
      for(var i=0; i<data.length; i++){
        if(data[i].amount > $scope.maxBid[data[i].product].amount ){
          $scope.maxBid[data[i].product] = data[i];
        }
      }
    }
  })

  $scope.startBid = function() {
    bidFactory.startBid(function() {
      $location.url('/bids')
    })
  }



})
