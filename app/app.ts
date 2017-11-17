///<reference path="typings/angularjs/angular.d.ts"/>
var app2 = angular.module('app',['ngRoute','ngAnimate']);

app2.config(['$routeProvider' , '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/home', {
            templateUrl: 'app/templates/home.html',
           // only work in angl2 template: '<h3 [innerText]="name"></h3>',
            controller: 'NinjaController',
            controllerAs: 'ninjaCntrl',
            resolve : {
                getNinjasData : (getNinjas)=> { 
                    return getNinjas.allNinja
                 }
            }
        })
        .when('/contact',{
            templateUrl: 'app/templates/contact.html',
            controller: 'ContactController',
            controllerAs: 'contCntrl'
        })
        .when('/contact-success',{
            templateUrl: 'app/templates/contact-success.html'
        })
        .when('/directory',{
            templateUrl:'app/templates/directory.html',
            controller: 'NinjaController',
            controllerAs: 'ninjaCntrl',
             resolve : {
                getNinjasData : (getNinjas)=> { 
                    return getNinjas.allNinja
                 }
            }
         })
         .when('/msgview', {
            templateUrl: 'app/templates/msg-view.html',
            controller: 'MessageController',
            controllerAs: 'msg',
            resolve: {
                message: function(messageService){
                    return messageService.getMessage();
            }
            },
            
         })
        .otherwise({
            redirectTo: '/home'
        });
}]);
