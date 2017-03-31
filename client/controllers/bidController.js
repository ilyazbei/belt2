app.controller('bidController', function($scope, bidFactory, $routeParams, $route, $location) {
  $scope.productBid = {};
  $scope.newBids = [0, 0, 0];




  var index = function() {
    if($routeParams.id) {
      bidFactory.getBids(function(data) {
        $scope.bids = data
        for(var key in $scope.bids) {
          if($scope.bids[key]['_id'] == $routeParams.id) {
            $scope.bids = $scope.bids[key]
          }
        }
      })
    }else{
      bidFactory.getBids(function(data) {
        $scope.bids = data
        console.log(data, 'this is data in front controllers');

      })
    }
  }
  index()

  $scope.createBid = function(product) {
    $scope.productBid.amount = $scope.newBids[product];
    $scope.productBid.product = product

    if(!$scope.newBids[product]){
      $scope.error = "Bid can't be emoty"
    }
    else if($scope.newBids[product] === 0){
      $scope.error = "Bid can't be $0"
    }
    else if ($scope.productBid.amount){
      var max = 0;
      for(var i=1; i<$scope.bids.length; i++){
        if($scope.bids[i].amount > max && $scope.bids[i].product === $scope.productBid.product){
          max = $scope.bids[i].amount;
        }
      }
      if($scope.newBids[product] <= max ){
        $scope.error = "Bid amount should be higher then previous amount"
      }else{
        $scope.error = ''

        bidFactory.createBid($scope.productBid, function(data) {
          if(data.errors) {
            $scope.errors = data.errors
          }else{
            $scope.newBids = [0,0,0];
            $location.url('/bids')
            index()
          }
        })
      }
    } //else if ends here
  }

  // $scope.search = function(data){
  //
  //   if($scope.searchText == undefined ) {
  //     return true;
  //   }
  //   else {
  //     if( data._user.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || data.amount.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }




  $scope.endBid = function() {
    var hasBids=[false, false, false]
    for( var i=0; i < $scope.bids.length; i++ ) {
      hasBids[$scope.bids[i].product] = true
    }
    if( hasBids[0] && hasBids[1] && hasBids[2] ) {
      $location.url('/result')
      // index()

    }else{
      alert('Bid on everything before ending the bid!!!')
    }

  }

  // $scope.search = function (row) {
  //   return
  //   angular.lowercase(row.amount).indexOf(angular.lowercase($scope.query) || '') !== -1;
  // };


})
