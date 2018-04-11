// New Code
var app = angular.module('travelAppDemo', ['ngRoute']);

app.controller("travelRequestController", function ($scope, $routeParams) {
    $scope.travelRequestId = $routeParams.travelRequestId;
    if ($scope.travelRequestId) {
        $("#travelRequestId").text($scope.travelRequestId);
    } else {
        $("#travelRequestId").text("");
    }
});

app.controller("travelReimbursementController", function ($scope, $routeParams) {
    $scope.travelReimbursementId = $routeParams.travelReimbursementId;
    if ($scope.travelReimbursementId) {
        $("#travelReimbursementId").text($scope.travelReimbursementId);
    } else {
        $("#travelReimbursementId").text("");
    }
});

app.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'uitemplates/login.html'
    }).when('/travelrequest/:travelRequestId?', {
        templateUrl: 'uitemplates/travelrequest.html',
        controller: 'travelRequestController',
        //css: 'content/travelrequest.css'
    })
        .when('/travelreimbursement/:travelReimbursementId?', {
            templateUrl: 'uitemplates/travelreimbursement.html',
            controller: 'travelReimbursementController',
            //css: 'content/travelrequest.css'
        })
        .otherwise({
            redirectTo: "/"
        });

    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);

// Old Code
//var app = angular.module('travelAppDemo', ['ngRoute']);

//app.config(function ($routeProvider) {

//    app.controller('loginController', function ($scope, $location) {

//        $scope.authenticate = function (username) {
//            // write authentication code here.. 

//            $location.path('/action/' + username)
//        };
//    });

//    app.controller("travelRequestController", function ($scope, $routeParams) {
//        $scope.travelRequestId = $routeParams.travelRequestId;
//    });

//    app.controller("travelReimbursementController", function ($scope, $routeParams) {
//        $scope.travelReimbursementId = $routeParams.travelReimbursementId;
//    });

//    // Routes
//    $routeProvider.when('/', {
//        templateUrl: '/uitemplates/login.html',
//        controller: 'loginController'
//    }).when('/logout', {
//        templateUrl: 'login.html',
//        controller: 'logoutController'
//    }).when('/travelreimbursement/:travelReimbursementId', {
//        templateUrl: '/uitemplates/travelreimbursement.html',
//        controller: 'travelReimbursementController',
//        css: 'content/travelreimbursement.css'
//    }).when('/travelrequest/:travelRequestId', {
//        templateUrl: '/uitemplates/travelrequest.html',
//        controller: 'travelRequestController',
//        css: 'content/travelrequest.css'
//    }).otherwise({
//        redirectTo: "/"
//    });
//});