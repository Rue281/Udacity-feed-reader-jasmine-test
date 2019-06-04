# Feed Reader Testing
 a web-based application that reads RSS feeds, [Jasmine](http://jasmine.github.io/) framework is used for testing.
 i wrote a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation. 


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## Project Overview

i used [Jasmine](http://jasmine.github.io/) to make the following tests: 

1. a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty.
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Write a test that ensures the menu element is hidden by default.
4. Write a test that ensures the menu changes visibility when the menu icon is clicked. 
5. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
Additionally, note that:

 * No test is dependent on the results of another.
 * Callbacks are used to ensure that feeds are loaded before they are tested.

## Installing
* Clone this repository or download zip link
* Unzip folder and double click on index.html

## Credits
<https://8thlight.com/blog/mike-jansen/2011/11/13/avoiding-common-errors-in-your-jasmine-specs.html>
<https://github.com/JamieMason/Jasmine-Matchers>
