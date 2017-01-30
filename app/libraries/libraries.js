/**
 * Created by ErikVeland on 24/11/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('LibrariesCtrl', LibrariesCtrl);

    LibrariesCtrl.$inject = ['libraryService', 'titleService','$state'];

    function LibrariesCtrl(libraryService,titleService,$state) {
        var vm = this;



        vm.openLibraryDetails = openLibraryDetails;
        vm.openNewLibrary = openNewLibrary;
        vm.title = 'Libraries';

        titleService.setTitle(vm.title);



        activate();

        function activate() {
            return getAllLibraries().then(function() {

            });
        }

        function getAllLibraries() {
            return libraryService.getAllLibraries().then(function(data) {
                vm.libraries = data.locations;
                console.log(vm.libraries);
                return vm.libraries;
            });
        }
        function openLibraryDetails(lib)
        {

            var stateParams = {'libraryId':lib.lid}

            $state.go('library-detail', stateParams);
        }
        function openNewLibrary()
        {
            $state.go('library-new');
        }
    }
})();