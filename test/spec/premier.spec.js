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

        beforeEach( module('controllersApp') );

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();    // initialisation avec un nouveau scope
            $controller('MessageCtrl', { $scope: $scope });   // nouvelle instance avec le nouveau scope
        }));

        it('should have a LoginCtrl controller', function() {
            expect($scope.getMessage("plop")).toBe("Hello plop");
        });

    });

    describe('Poney' , function(){

        var $scope, $httpBackend;

        beforeEach( module('controllers') );

        beforeEach(inject(function($rootScope, $controller, _$poneyService_, _$httpService_) {
            $scope = $rootScope.$new();    // initialisation avec un nouveau scope
            $poneyService = _$poneyService_;
            $httpService = _$httpService_;

            $controller('httpController', { $scope: $scope, $poneyService:$poneyService, $httpService:$httpService });   // nouvelle instance avec le nouveau scope
        }));

        it('should fetch 2 poneys', function(){
           $httpBackend.expectGET("http://localhost:8080/poneys/").respond([ceed, jb]) ;

           $scope.list();
           $httpBackend.flush();

           expect($scope.poneys.length).toBe(2);

        });

    }) ;

})(angular);

