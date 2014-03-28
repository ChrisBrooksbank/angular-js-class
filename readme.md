AngularJS Class
Tim Ruffles
28th March 2014
The Hub, 80 Haymarket

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

LUNCH

-----------------

Angulars module system

A service is some code, thats all !
what they change is, how one piece of code accesses another
> Dependancy Injection
DI is goal, services is Angular way to achieve
Services live in modules

app="some module" OR angular.bootstrap( someElement, [someModule])

app.factory, your functions return value is your service

we define services without dependencies with value
app.value("adminrole", "ADMIN-user")

One module is ng, hence ng-repeat, ng-hide ......

So changes to code, move and define dependancies

uglify can break your code

--------------------------------

http://jsbin.com/winar
follow coding realtime !

myModule.factory("User", function(Sync) ..... )

app.controller("Auth", function( User, $Scope))

// User is a service, $Scope is actually not a service its a variable

Angular looks at the *name* of the argument to find the code to inject
uses RegEx - dirty secret :)

--------------------------------

project structure
directions src test vendor
mkdir src
mkdir src/{core,accounts,billing,teams,cat} -- team is name of module

mkdir $dir/{controllers,directives,models,helpers}
**terminal tip**

---------------------------------

Filters

* quick, declarative transformation of output, e.g. date displayed nicely
* works with data binding
* pipe syntax

Syntax sugar around factory
app.filter("everyother", function() { blah; })

--------------------------------

exercise crud-mvc

factory documented in $provide, on angularjs site
developers guide.

validation also is in angular

got it working !

------------------------------

A module
routes : ng-route, can be replaced by another, more fully featured routing system
add a script src tag

routes is complex but not complicated

location, route, routeParams i.e three services

one directive ng-view = where content appears for current route

$routeProvider = the class to configure the service
$locationProvider = configure how URL works
$routeParams, dont need to configure

pushstate urls, IE10 or > !

.when("url pattern")
templaterURL: "templateurl"
controller: "controllerName", or bake controller into template

route provider API docs

a good route alternative is stateProvider

-----------------------------------

Template

file urls, cant do ajax, load templates, put can put HTML in script tag, type = text/angular, HACK

>	  <!-- TEMPLATES -->
        <script type="text/ng-template" id="home.html">
          <h1>Home</h1> 
        </script>

--------

location

routeParams

**ui-router** much better router, on github, angular team

----------------------------------

exercises/routes


