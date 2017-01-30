/**
 * Created by ErikVeland on 25/11/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject=['$mdSidenav', '$timeout', '$state','titleService'];

    function NavCtrl($mdSidenav,$timeout,$state, titleService) {
        var nav = this;

        nav.isMenuOpened = isOpened('left');
        nav.title = getTitle();
        nav.toggleMenu = buildToggler('left');

        function buildToggler(navID)
        {
            return function() {

                $mdSidenav(navID)
                    .toggle()
                    .then(function () {

                    });
            }
        }
        function getTitle(){
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