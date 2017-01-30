(function () {
    'use strict';

    angular
        .module('app.components.public')
        .controller('librariesListController', librariesListController);


    /* @ngInject */
    function librariesListController($scope, styling, showToast, $mdDialog, apiRef,$state) {


        var vm = this;

        vm.initTableQueryExpression = initTableQueryExpression;                    //initialise table
        vm.startQueryWatcher = startQueryWatcher;                                  //watch for any change in vm.query object and get library list again
        vm.resetForm = resetForm;
        vm.getLibrariesList = getLibrariesList;
        vm.showLibraryComputerAvailabilities = showLibraryComputerAvailabilities;
        vm.rowColor = rowColor;                                                    //generates RGBA color for the library row based on the library color property
        vm.goToCreateLibraryPage = goToCreateLibraryPage;

        activate();

        ////////////////

        function activate() {
            vm.initTableQueryExpression();
            vm.startQueryWatcher();
        }


        function initTableQueryExpression() {

            vm.query = {
                filters: {
                    name: ""
                },
                tableOptions: {
                    rowsPerPage: [30, 40, 50],
                    limit: 40,
                    orderBy: 'finish_desc',
                    page: 1,
                    options: {
                        debounce: 500
                    }
                }


            };
        }

        function rowColor(hex, opacity) {
            return {'background-color': styling.hex2RGBA(hex, opacity)};
        }


        function startQueryWatcher() {
            $scope.$watch("vm.query", function (newValue, oldValue) {
                vm.getLibrariesList();
            }, true);
        }


        function getLibrariesList() {
            vm.tableDataLoaded = apiRef.endPoint("libraryHours").get(function (success) {
                    vm.librariesList = success.locations;
                    vm.totalRecords = vm.librariesList.length;
                },
                function (error) {
                    showToast.msg("An error happened while retrieving data");
                }
            ).$promise;
        }

        function showLibraryComputerAvailabilities($event, libraryName) {
            $mdDialog.show({
                controller: 'computerAvailabilityController',
                controllerAs: 'vm',
                templateUrl: 'app/components/public/libraries/views/public.libraries.computer-availability.tmpl.html',
                params: {
                    libraryName: libraryName
                },
                targetEvent: $event
            });
        }


        function resetForm(formName) {

            vm.initTableQueryExpression();

            if (vm.filters.form.$dirty) {
                vm.filters.form.$setPristine();
            }
        }

        function goToCreateLibraryPage() {
            $state.go("uql.webapp.components.admin.create-libraries")
        }


    }
})();
