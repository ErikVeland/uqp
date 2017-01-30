(function () {
    'use strict';

    angular
        .module('app.components.admin')
        .controller('adminCreateLibraryController', adminCreateLibraryController);


    /* @ngInject */
    function adminCreateLibraryController($timeout,  showToast,  $state, $log) {


        var vm = this;

        vm.campusList = ['St Lucia', 'Herston', 'Bundaberg', 'PACE', 'Mater'];

        vm.createLibrary = createLibrary;
        vm.cancel = cancel;
        vm.resetForm = resetForm;

        ////////////////

        //simulate 2 seconds response time
        function createLibrary() {
            vm.showCircularProgressForSubmission=true;
            $timeout(function () {
                showToast.msg("The library " + vm.library.name + " has been created successfully");
                vm.showCircularProgressForSubmission=false;
            }, 2000)
        }

        function cancel(formName) {
            $state.go("uql.webapp.components.public.libraries");
        }

        function resetForm(formName) {
            if (vm[formName].$dirty) {
                vm[formName].$setPristine();
                vm.library = angular.copy({});
            }
        }
    }
})();
