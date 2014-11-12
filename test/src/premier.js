(function (angular) {

    var controllersApp = angular.module('controllersApp', []);

    controllersApp.controller("MessageCtrl", function($scope){
        $scope.getMessage = function(pName){
            return "Hello " + pName ;
        };
    })

})(angular);


