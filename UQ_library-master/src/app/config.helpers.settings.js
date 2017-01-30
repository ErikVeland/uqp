(function() {
    'use strict';

    angular
        .module('app')
        .config(settingsConfig);

    /* @ngInject */
    function settingsConfig(triSettingsProvider, triRouteProvider) {
        var now = new Date();
        // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
        triSettingsProvider.setName('UQL');
        triSettingsProvider.setCopyright('&copy;' + now.getFullYear() + ' UQ Library');
        triSettingsProvider.setLogo('assets/images/UQ logo.png');
        // set current version of app (shown in footer)
        triSettingsProvider.setVersion('0.1 Beta');
        // set the document title that appears on the browser tab
        triRouteProvider.setTitle('UQL');
        triRouteProvider.setSeparator('|');

    }
})();
