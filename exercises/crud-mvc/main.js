var app = angular.module("exercise",[]);

app.controller("orderList",function($scope) {
  $scope.removeOrder = function(index)
  {
  	$scope.orders.splice(index,1);
  }
});

app.controller("addOrder",function($scope) {
  $scope.add = function(){ $scope.orders.push(
  	{text: $scope.neworder
  }); }
});

app.controller("orders",function($scope) {
  $scope.orders = [
    {text:"warm cheese and mushroom cupcake"},
    {text:"citrus banoffee tart"},
    {text:"polenta meringue"},
    {text:"half a baker's dozen of unboiled bagles"}
  ];


})

