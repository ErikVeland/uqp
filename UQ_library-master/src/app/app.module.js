(function () {
    'use strict';

    angular
        .module('app', [
            'helpers',
            'ngAnimate',
            'ngCookies',
            'ngSanitize',
            'ngMessages',
            'ngMaterial',
            'ui.router',
            'LocalStorageModule',
            'linkify',
            'angularMoment',
            'hljs',
            'md.data.table',
            angularDragula(angular),
            'ngFileUpload',
            'app.components',
            'angular.filter',
            'ngResource',
            'common.module',
            'ui.mask'
        ])

        .constant('_', window._)

        .constant("appSettings", {
            apiUri: "http://app.library.uq.edu.au/api"
        })

        .config([
            '$compileProvider',
            function ($compileProvider) {
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file):/);
            }
        ])

        .config(function ($mdDateLocaleProvider) {
            $mdDateLocaleProvider.formatDate = function (date) {
                if (date != null) {
                    return moment(date).format('DD/MM/YYYY')
                } else {
                    return null
                }
            };
        })


        .run(function ($rootScope) {
            $rootScope._ = window._;
        })



    ;

})();
