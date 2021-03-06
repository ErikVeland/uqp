(function () {
    'use strict';

    angular
        .module('helpers.components')
        .controller('DefaultToolbarController', DefaultToolbarController);

    /* @ngInject */
    function DefaultToolbarController( $scope, $rootScope, $mdMedia, $mdUtil, $mdSidenav, $document, triBreadcrumbsService, triSettings, triLayout) {
        var vm = this;
        vm.breadcrumbs = triBreadcrumbsService.breadcrumbs;
        vm.emailNew = false;
        vm.languages = triSettings.languages;
        vm.openSideNav = openSideNav;
        vm.hideMenuButton = hideMenuButton;
        vm.toggleNotificationsTab = toggleNotificationsTab;
        vm.isFullScreen = false;
        vm.fullScreenIcon = 'zmdi zmdi-fullscreen';
        vm.toggleFullScreen = toggleFullScreen;

        // initToolbar();

        ////////////////

        function openSideNav(navID) {
            $mdUtil.debounce(function () {
                $mdSidenav(navID).toggle();
            }, 300)();
        }


        function hideMenuButton() {
            return triLayout.layout.sideMenuSize !== 'hidden' && $mdMedia('gt-sm');
        }

        function toggleNotificationsTab(tab) {
            $rootScope.$broadcast('triSwitchNotificationTab', tab);
            vm.openSideNav('notifications');
        }

        function toggleFullScreen() {
            vm.isFullScreen = !vm.isFullScreen;
            vm.fullScreenIcon = vm.isFullScreen ? 'zmdi zmdi-fullscreen-exit' : 'zmdi zmdi-fullscreen';
            // more info here: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
            var doc = $document[0];
            if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                if (doc.documentElement.requestFullscreen) {
                    doc.documentElement.requestFullscreen();
                } else if (doc.documentElement.msRequestFullscreen) {
                    doc.documentElement.msRequestFullscreen();
                } else if (doc.documentElement.mozRequestFullScreen) {
                    doc.documentElement.mozRequestFullScreen();
                } else if (doc.documentElement.webkitRequestFullscreen) {
                    doc.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (doc.exitFullscreen) {
                    doc.exitFullscreen();
                } else if (doc.msExitFullscreen) {
                    doc.msExitFullscreen();
                } else if (doc.mozCancelFullScreen) {
                    doc.mozCancelFullScreen();
                } else if (doc.webkitExitFullscreen) {
                    doc.webkitExitFullscreen();
                }
            }
        }

        $scope.$on('newMailNotification', function () {
            vm.emailNew = true;
        });

        vm.logout = function (ev) {

            logoutService.logout(ev);
        };


        /*function showConfirm(ev, shift, shiftParamName, role, shiftEndpoint) {


         var confirm = $mdDialog.confirm()
         .title('Seems you have an ongoing shift')
         .textContent('Please confirm you want to end your ' + role + ' shift before logging out')
         .ariaLabel('end shift')
         .targetEvent(ev)
         .ok('I confirm')
         .cancel('Cancel');

         $mdDialog.show(confirm).then(function () {
         apiRef.endPoint(shiftEndpoint).get({
         shiftId: shift[shiftParamName].id
         }, function (data) {
         shift[shiftParamName] = null;
         localStorage.shift = angular.toJson(shift);
         showToast.msg('Your ' + role + ' shift has been finished.');
         vm.logout();
         });
         }, function () {
         showToast.msg("Your haven't confirmed finishing of your " + role + " shift.");

         });


         }*/

    }
})();
