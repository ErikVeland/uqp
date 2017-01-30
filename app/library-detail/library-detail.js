/**
 * Created by ErikVeland on 24/11/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('LibraryDetailCtrl', LibraryDetailCtrl);

    LibraryDetailCtrl.$inject = ['libraryService', 'titleService','$state', '$stateParams'];

    function LibraryDetailCtrl(libraryService,titleService,$state, $stateParams) {
        var vm = this;

        var currentLibraryId= $stateParams.libraryId;
        vm.computers = [];
        vm.library = {};
        vm.title = 'Library info';

        titleService.setTitle(vm.title);



        activate();

        function activate() {
            return getLibrary(currentLibraryId).then(function() {
                getComputerAvailability().then(function(){

                });
            });
        }

        function getLibrary(libId) {
            return libraryService.getLibrary(libId).then(function(data) {
                vm.library = data.locations[0];

                return vm.library;
            });
        }
        function getComputerAvailability(){
           return libraryService.getComputerAvailability().then(function(data){
               for (var i=0; i<data.length; i++)
               {
                   data[i].library = data[i].library.replace(/&amp;/g, '&');
                   vm.computers.push(data[i]);
               }

               return vm.computers;
           })
        }
    }
})();