var exercise = angular.module("exercise",[]);

exercise.directive("flash",function() {
  return function(scope,el,attrs) {
    // YOUR CODE
    // $scope.click = function() 
    el.bind('click', function() {
      el.addClass("go");
    })
    
  }
})
