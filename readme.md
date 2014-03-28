Tim Ruffles

* Write own components
* data binding
* declarative
* custom markup
* very little javascript

* make HTML a language fit for web apps
* radical testability
* plain JS where possible

* Model of business/problem domain
* view
* Controller - glue between model and view

* Seperation of data and view
* WVC Whatever-view-controller :)
* HTML extended via directives eg ng-repeat

plan : Directives, controllers, module system, testing

easy to integrate JQuery ( comes with JQueryLite already )
PhoneGap - OK can use Angular in phonegap app
JQuery mobile, prob OK, heavy fw
( backbone, ember not so well, different approaches )

No overlap with RequireJS, RequireJS is a module **loader**

Angular most benefical long lived pages, models live long time
, not just for adding widgets

BackBone over Angular when complex visualistions, need more control over rendering, backbone liter

ng-repeat
"step in stepsForDirectives", mini language

ng-click
view is scoped, so use this

ng-controller

ng-show="content.visible"

ng-hide

ng-if - show HTML if true

ng-include - include a template, cool

ng-class, ng-style, ng-attributes

excercises using built in directives

* open with open index.html ! dont run httpserver !

* controllers and scopes

controller should never touch DOM
compiling views - slow !

$rootScope
scopes are hierachal
lots of directives create own scope
e.g. ng-controller
child has access to all parents behavour and data

controllers/scopes

---------------------------------

Digesting scopes
scopes similar to closures in terms of scopes
or prototypeing inheritence, use that ....

var parent = {
	title : "our lovely app",
	user: {name : "bob"} }
}
var child = Object.create(parent)

child.title // "our lovely app"
child.user ==== parent.user // true, === same object instance

*not* a clone

-----------------------------------

scope.$watch // normally done for us in a directive

scope.$watch("user.name", function( newvalue, old) {})

[] === [] // fails, 
avoid deep comparison for speed, avoid copying data, scope.$watchCollection()

------------------

Digesting is about firing watchers
$digest() is a scope method, fires handlers if value of expression has changed

Angular has a log service you could inject rather than using console.log

* if very fast changing, can have a buffer class, then watch that buffer instead

--------------------

when does watching happen, answer when u tell it to....
directives need to call digest when something might have changed

----------------------

scope.on = false;
scope.on = true;
scope.$digest() // dont normally actually call digest yourself

**use apply() instead of digest when writing own directives **
use $scope.setTimeout() instead of JS, calls apply() at end for you

$apply runs your code in a try catch for you, digests from $rootScope downwards regardless

-------------------------

**Never bind to the scope directly, always to an object on the scope instead**

tricky-scopes excercise


--------

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


---------------

listen to a $destroy event and cleanup, e.g. timeouts e.t.c.
we can see when $scope is destroyed

Scopes pubsub system.
$emit, current scope up 
and $broadcast, current scope down
dont use as a general pubsub system for your own app, too heavy handed for that

$scope.$on("destroy", function(event,id)) .......

$interval.cancel( foo ..... )

------------------

how many controllers ?

**jsbin.com**
basket-model rather than ng-model
[basketCode]http://jsbin.com/winar/1/edit

----------------

