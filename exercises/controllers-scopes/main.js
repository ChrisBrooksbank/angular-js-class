var app = angular.module("exercise",[]);

// YOUR CODE
// we're missing a controller
// - you'll see an error in the console that'll suggest what to fix.

app.controller("defineMe",function($scope) {
})

app.controller("listful",function($scope) {
  // YOUR CODE
  $scope.list = [ {title:"fish"}, {title:"banana"} ]; // looking a bit bare
})

app.controller("tabs",function($scope) {
  // YOUR CODE
  // the view is expecting a function to be defined
  // on the scope - can you fill it in?
  $scope.showTab = function(tabname) { 
  	$scope.tab = tabname; }
})
