(function() {
    'use strict';

    angular
        .module('helpers', [
            'ngMaterial',
            'helpers.layouts', 'helpers.components', 'helpers.themes', 'helpers.directives', 'helpers.router',
            // 'helpers.profiler',
            // uncomment above to activate the speed profiler
            'ui.router'
        ]);
})();
