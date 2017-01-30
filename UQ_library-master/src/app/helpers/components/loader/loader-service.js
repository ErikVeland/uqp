(function() {
    'use strict';

    angular
        .module('helpers.components')
        .factory('triLoaderService', LoaderService);

    /* @ngInject */
    function LoaderService() {
        var active = false;

        return {
            isActive: isActive,
            setLoaderActive: setLoaderActive
        };

        ////////////////

        function isActive() {
            return active;
        }

        function setLoaderActive(setActive) {
            active = setActive;
        }
    }
})();
