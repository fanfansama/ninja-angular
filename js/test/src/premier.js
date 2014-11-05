//(function (angular) {

    angular.module('controllers').controller("MessageCtrl", function($scope){
        $scope.getMessage = function(pName){
            return "Hello " + pName ;
        };
    })

//})(angular);


