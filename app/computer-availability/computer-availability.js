(function() {
    'use strict';

    angular
        .module('app')
        .controller('ComputerAvailabilityCtrl', ComputerAvailabilityCtrl);

    ComputerAvailabilityCtrl.$inject = ['libraryService', 'titleService'];

    function ComputerAvailabilityCtrl(libraryService,titleService) {
        var vm = this;


        vm.computers = [];
        vm.title = 'Computer Availability';

        titleService.setTitle(vm.title);



        activate();

        function activate() {
            return getComputerAvailability().then(function(){
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