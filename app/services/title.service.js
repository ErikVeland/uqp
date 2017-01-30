/**
 * Created by ErikVeland on 25/11/2016.
 */
angular
    .module('app')
    .service('titleService', titleService);


function titleService() {

    this.getTitle = function() {
        return this.title;
    };

    this.setTitle=function(title)
    {
        this.title=title;
    };
};