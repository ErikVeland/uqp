/**
 * Created by Mani on 11/01/2017.
 */
(function () {
    'use strict';

    /* @ngInject */
    function dialogBox($mdDialog) {

        var content = function (ev,title,dialogContent,confirmFn)
        {

            var confirm = $mdDialog.confirm()
                .title(title)
                .content(dialogContent)
                .ariaLabel('confirmDialog')
                .targetEvent(ev)
                .ok('Yes')
                .cancel('No');

            $mdDialog.show(confirm).then(function() {
                confirmFn();
            });

        };
        return {
            content: content
        };
    }

    angular.module('common.module').factory('dialogBox', dialogBox);


})();

