(function () {
    'use strict';

    angular
        .module('app.components.public')
        .controller('librariesDetailsController', librariesDetailsController);


    /* @ngInject */
    function librariesDetailsController(styling, showToast, apiRef, $stateParams, matchFinder) {

        var libraryId = $stateParams.libraryId;
        var vm = this;

        vm.getLibrariesList = getLibrariesList;
        vm.findLibraryById = findLibraryById;
        vm.getComputerAvailabilitiesList = getComputerAvailabilitiesList;
        vm.generateColor = generateColor;

        activate();

        ////////////////

        function activate() {
            vm.getLibrariesList();

        }

        function getLibrariesList() {

            apiRef.endPoint("libraryHours").get(function (success) {
                    vm.librariesList = success.locations;
                    vm.library = vm.findLibraryById(vm.librariesList, libraryId);
                    if (vm.library) {
                        vm.getComputerAvailabilitiesList()
                    } else {
                        showToast.msg("The id does not belong to any library");
                    }
                },
                function (error) {
                    showToast.msg("An error happened while retrieving data");
                }
            );
        }


        function findLibraryById(libraryList, libraryId) {
            var library = _.find(libraryList, ['lid', libraryId]);
            if (library) return library;
            return false
        }


        function getComputerAvailabilitiesList() {
            apiRef.endPoint("computerAvailability").query(function (success) {
                    vm.computerAvailabilitiesList = success;
                    vm.libraryComputerAvailabilityList = matchFinder.findComputerAvailabilityByLibraryName(vm.computerAvailabilitiesList, vm.library.name)
                },
                function (error) {
                    showToast.msg("An error happend while retreiving data");
                })
        }

        function generateColor(hex, opacity) {
            return {'background-color': styling.hex2RGBA(hex, opacity)};
        }


        function resetForm(formName) {

            vm.initTableQueryExpression();

            if (vm.filters.form.$dirty) {
                vm.filters.form.$setPristine();
            }
        }


    }
})();
