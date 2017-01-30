/**
 * Created by ErikVeland on 30/01/2017.
 */
angular
    .module('app')
    .config(
        function ($mdThemingProvider, $httpProvider) {

            var brandcolor = $mdThemingProvider.extendPalette('purple', {
                '500': '#49075e',
                'contrastDefaultColor': 'light'
            });
            var negative = $mdThemingProvider.extendPalette('red', {
                '500': '#ef473a',
                'contrastDefaultColor': 'light'
            });
            $mdThemingProvider.definePalette('brandcolor', brandcolor);
            $mdThemingProvider.definePalette('negative', negative);
            $mdThemingProvider.theme('default')
                .primaryPalette('brandcolor')
                .warnPalette('negative');


            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        });


