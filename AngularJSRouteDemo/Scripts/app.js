var app = angular.module('travelAppDemo', ['ngRoute', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns']);

app.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'uitemplates/login.html'
        })
        .when('/travelrequest', {
            templateUrl: 'uitemplates/travelrequest.html',
            controller: 'travelRequestController',
            css: 'content/travelrequest.css',
            js: 'scripts/tr.js'
        })
        .when('/travelrequest/:travelRequestId[0-9]+', {
            templateUrl: 'uitemplates/travelrequest.html',
            controller: 'travelRequestController',
            css: 'content/travelrequest.css',
            js: 'scripts/tr.js'
        })
        .when('/travelrequest/submit', {
            templateUrl: 'uitemplates/travelrequestsubmit.html',
            controller: 'travelRequestController',
            css: 'content/travelrequestsubmit.css'
        })
        .when('/travelreimbursement/:travelReimbursementId?', {
            templateUrl: 'uitemplates/travelreimbursement.html',
            controller: 'travelReimbursementController',
            css: 'content/travelreimbursement.css'
        })
        .otherwise({
            redirectTo: "/"
        });

    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);
