//-----------------------------------------------------------------------------------------------
//REVIVE APP: DEFAULT MODULE
//-----------------------------------------------------------------------------------------------
var app = angular.module("revive", ["ngRoute", "facebook"])

//APP CONFIGURATION
app.config(function ($routeProvider, FacebookProvider) {

    //INITIALIZE FACEBOOK
    FacebookProvider.init('1656264237984470'); 

    //INITIALIZE PAGES
    $routeProvider
    .when("/home", {
        templateUrl: "templates/home.html",
        controller: 'homeCtrl'
    })
    .when("/search", {
        templateUrl: "templates/home.html",
        controller: 'searchCtrl'
    })
    .otherwise({
        templateUrl: "templates/home.html",
        controller: 'homeCtrl'
    });
});

//-----------------------------------------------------------------------------------------------
//GLOBAL VARIABLES
//-----------------------------------------------------------------------------------------------
app.run(function ($rootScope) {
    $rootScope.storedSearchQuery = "NEVILLE BRODY";
});

app.run(function ($rootScope) {
    $rootScope.storedEventName = "Realizing Rules Don't Matter";
});

app.run(function ($rootScope) {
    $rootScope.storedEventDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat commodo vestibulum. Fusce elementum purus ut velit finibus, quis porta felis tincidunt. Fusce tempor nibh id sodales feugiat. ";
});

app.run(function ($rootScope) {
    $rootScope.storedEventSource = "images/Neville.png";
});