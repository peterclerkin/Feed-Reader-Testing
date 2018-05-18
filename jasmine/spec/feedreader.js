/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function () {
    // A Test suite to test RSS feeds 
    describe('RSS Feeds', function () {
        // A test to make sure that the allFeeds variable has been defined and that it is not empty
        it('are defined', function () {
            // Expect allFeeds are defined and their length isn't 0
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
        it('URLs are defined', function () {
            // A loop to make sure allFeeds URLS are defined and are present by making sure their length isn't 0
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        // A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
        it('names are defined', function () {
            // A loop to make sure allFeeds names are defined and are present by making sure their length isn't 0
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    // Test suite to test the menu
    describe('The Menu', function () {
        // A test that ensures the menu element is hidden by default
        it('menu hidden by default', function () {
            // Expect the menu to be hidden on default to be true
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // A test that ensures the menu changes visibility when the menu icon is clicked
        it('menu changes visibility on click', function () {
            // First expectation: When the menu is clicked it is shown
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // Second expectation: When the menu is clicked it isn't shown
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // A test suite that tests the initial entries
    describe('Initial Entries', function () {
        // loadFeed() is asynchronous so the beforeEach and asynchronous done() function is used
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        // Ensure there is an .entry within the .feed
        it('Ensures there is an entry', function () {
            expect($('.feed .entry')).toBeDefined();
        });
    });

    // Test suite to test the news feed selection
    describe('New Feed Selection', function () {
        var feedOne;
        var feedTwo;
        // loadFeed() is asynchronous so the beforeEach and asynchronous done() function is used
        beforeEach(function (done) {
            loadFeed(0, function () {
                feedOne = $('.feed').html();
            loadFeed(1, function () {
                feedTwo = $('.feed').html();
                done();
                });
            });
        });
        // Make sure the 2 feeds are different
        it('Checks that the 2 feeds differs', function () {
            expect(feedOne).not.toBe(feedTwo);
        });

    });

}());
