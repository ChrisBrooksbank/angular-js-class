var app = angular.module("exercise",[]);

app.controller("main",function($scope) {
  $scope.model = {count: 0}
})

app.controller("child",function($scope) {
  $scope.increment = function() {
    $scope.model.count += 1
  }
  $scope.delayedIncrement = function() {
    setTimeout(function() {
      $scope.model.count += 1
      $scope.$apply()
    },250); // just perceptible delay
  }
})
