(function (angular) {

    var controllers = angular.module('controllers', []);

    controllers.controller("MessageCtrl", function($scope){
        $scope.getMessage = function(pName){
            return "Hello " + pName ;
        };
    })

})(angular);


