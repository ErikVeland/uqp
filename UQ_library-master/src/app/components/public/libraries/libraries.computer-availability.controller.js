(function () {
    'use strict';

    angular
        .module('app.components.public')
        .controller('computerAvailabilityController', computerAvailabilityController);

    /* @ngInject */
    function computerAvailabilityController($window, $mdDialog, showToast, matchFinder, params,  apiRef) {
        var vm = this;
        vm.libraryName = params.libraryName;

        vm.cancelClick = cancelClick;
        vm.okClick = okClick;
        vm.printClick = printClick;
        vm.getComputerAvailabilitiesList = getComputerAvailabilitiesList;  //Get the Computer Availabilities list from UQ API

        activate();

        ////////////////

        function activate() {
            vm.getComputerAvailabilitiesList();
        }

        function getComputerAvailabilitiesList() {
            apiRef.endPoint("computerAvailability").query(function (success) {
                    vm.computerAvailabilitiesList = success;
                    //matching the library names in computer availability list and
                    // libraries list and return the availability if there is any match
                    // otherwise return false
                    vm.libraryComputerAvailabilityList= matchFinder.findComputerAvailabilityByLibraryName(vm.computerAvailabilitiesList, vm.libraryName)
                },
                function (error) {
                    showToast.msg("An error happened while retrieving data");
                })
        }


        function okClick() {
            $mdDialog.hide();
        }

        function cancelClick() {
            $mdDialog.cancel();
        }

        function printClick() {
            $window.print();
        }

    }
})();
