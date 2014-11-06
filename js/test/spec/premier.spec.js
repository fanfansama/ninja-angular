// http://jasmine.github.io/2.0/introduction.html

(function (angular) {


    describe('user login form', function() {

        // critical
        it('ensure invalid email addresses are caught', function() {});
        it('ensure valid email addresses pass validation', function() {});
        it('ensure submitting form changes path', function() { });

        // nice-to-haves
        it('ensure client-side helper shown for empty fields', function() { });
        it('ensure hitting enter on password field submits form', function() { });

        it("should be true", function(){   expect(true).toBe(true);   });

    });


    describe('Controller MessageCtrl', function(){
        var $scope;

        beforeEach( module('controllers') );

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();    // initialisation avec un nouveau scope
            $controller('MessageCtrl', { $scope: $scope });   // nouvelle instance avec le nouveau scope
        }));

        it('should have a LoginCtrl controller', function() {
            expect($scope.getMessage("plop")).toBe("Hello plop");
        });

    });


})(angular);

