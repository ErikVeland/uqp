/**
 * Created by Mani on 11/01/2017.
 */
(function () {
    'use strict';

    /* @ngInject */
    function showToast($mdToast) {

        var msg = function (message)
        {

            var toast = $mdToast.simple()
                .content(message)
                .hideDelay(3000)
                .position('bottom right');

        $mdToast.show(toast);
    };
        return {
            msg: msg
        };
    }

    angular.module('common.module').factory('showToast', showToast);


})();

