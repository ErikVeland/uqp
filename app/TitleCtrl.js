/**
 * Created by ErikVeland on 26/11/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('TitleCtrl', TitleCtrl);

   TitleCtrl.$inject=['titleService'];

    function TitleCtrl(titleService) {
        var vm = this;


        vm.title = getCurrentTitle;


        function buildToggler(navID)
        {
            return function() {

                $mdSidenav(navID)
                    .toggle()
                    .then(function () {

                    });
            }
        }
        function getCurrentTitle(){

            return titleService.getTitle();
        }

        function isOpened(navID) {
            //   return true;
            return function(){
                $mdSidenav(navID).isOpen();
            }

        }


    }
})();