/**
 * Created by ErikVeland on 24/11/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('LibraryNewCtrl', LibraryNewCtrl);

    LibraryNewCtrl.$inject = ['libraryService', 'titleService'];

    function LibraryNewCtrl(libraryService,titleService) {
        var vm = this;
        vm.campuses = [
            'St Lucia',
            'Herston',
            'Bundaberg',
            'PACE',
            'Mater'
        ];
        vm.libraries = [];
        vm.title = 'New Library';

        vm.formData = {};
        vm.submitForm = submitForm;

        titleService.setTitle(vm.title);

        function submitForm() {
            console.log(vm.formData);
            alert('Form submittted');
        }
    }
})();