// http://jasmine.github.io/2.0/introduction.html

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


describe('MessageCtrl', function(){
    var $scope;

    beforeEach( module('controllers') );

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('MessageCtrl', {
            $scope: scope
        });
    }));

    it('should have a LoginCtrl controller', function() {
        expect(MessageCtrl.getMessage("plop")).toBe("plop");
    });

});
