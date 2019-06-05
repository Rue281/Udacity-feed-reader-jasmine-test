/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* make sure that the allFeeds variable has been
         * defined and that it is not empty.*/
         
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined', function() {
            for (var feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });


        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function(){
            for (var feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });
    });


    /* a new test suite named "The menu" */
    describe('The menu', function(){



        /* ensures the menu element ishidden by default. 
         */
         it('menu hidden by default',function(){
            /*let menu = document.querySelector('.slide-menu');

            expect(menu.attributes('hidden')).toEqual(true);*/
            expect($('.menu-hidden')).not.toBe(false);
         });

         /*  ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('menu-icon click',function(){

            //check if the menu is invisible
            $('menu-icon-link').click();
            expect($('body').hasClass($('.menu-hidden'))).toBeDefined();

            //check if the menu is visible
            $('menu-icon-link').click();
            expect($('body').hasClass($('.menu-hidden'))).toBe(false);
          });
    });

    /* a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        /* ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
            loadFeed(0,done);
         });

         it('Async loadFeed should have at least single entry',function(){
            expect(($('.feed .entry')).length).toBeGreaterThan(0);
            // done();
         });
    });

    /* a new test suite named "New Feed Selection" */
    describe('New Feed Selection',function(){

        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */
         var feed;
         beforeEach(function(done){
            loadFeed(1,function(){
                feed = $('.feed').html();
                done();
            });
         });

         it('the content should be changed when a new feed is loaded',function(done){
            loadFeed(0,function(){
                expect($('.feed').html()).not.toEqual(feed);
            done();
            });  
        });
    });

}());
