'use strict';

describe('Controller: libraries.list', function () {

    // load the controller's module
    beforeEach(module('app'));

    var librariesListController,
        vm;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        vm = $rootScope.$new();
        librariesListController = $controller('librariesListController', {
            $scope: vm
            // place here mocked dependencies
        });

    }));

    it('should parse and convert input text to array', function () {
        expect(librariesListController.rowColor('#1C6DBD', 0.2))
            .toEqual({'background-color': 'rgba(28,109,189,0.2)'});
    });


});
