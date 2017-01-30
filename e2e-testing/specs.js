'use strict';

describe('library app', function() {

    describe('page navigation', function() {

        beforeEach(function() {
            browser.get('#/');
        });


        it('should  redirect to /new when user press button New', function() {

            //open side menu if button new library is not displayes
            element(by.id('library-new')).isDisplayed().then(function(result) {
                if ( !result ) {
                    element(by.id('menu-icon')).click();
                }
            });

            element(by.id('library-new')).click();
            expect(browser.getLocationAbsUrl()).toMatch("/new");

        });

        it('should  open library detail page when click on button', function() {

            //open library detail page
            element(by.id('libdetail-3823')).click();
            expect(browser.getLocationAbsUrl()).toMatch("/3823");

        });

        it('should make JSONP request to valid URL to get library details',
            function() {
                element(by.id('libdetail-3823')).click();
                var data = element(by.binding('vm.library.name'));
                expect(data.getText()).toMatch('Architecture & Music Library');
            });

    });

});

