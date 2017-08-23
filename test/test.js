var Nightmare = require("nightmare");
var should = require('chai').should();
var home = require("../home.html");
var lost = require("../lost.html");
var found = require("../found.html");

function claimMatch(){

}

// *Unique Attributes (all Y/N)— default N
// **Pocket(s)?
// **Collar?
// **Pattern?
// **Natural material?

// testing front end user features. What happens when input is submitted.
describe("claimMatch", function(){

  it("should check if unique attributes are equal", function{
    claimMatch("Yes").should.equal("Yes")
  });

  it("should", function{

  });

  it("should", function{

  });




});

//
// describe("disemvowel", function() {
//   it("should return a string without vowels", function() {
//     disemvowel("gingham").should.equal("gnghm");
//   });
//
//   it("should throw when the string only includes vowels", function() {
//     (function() {
//       disemvowel("you");
//     }).should.throw(Error);
//   });
//
// });

// describe("Reddit", function() {
//   // The default tests in mocha is 2 seconds.
//   // Extending it to 30 seconds to have time to load the pages
//   var search = "[form *='/search'] [type=submit]";
//
//   this.timeout(30000);
//   it("should type a query in the search field", function(done) {
//     Nightmare({ show: true })
//       .goto("https://reddit.com")
//       .wait(search)
//       .click(search)
//       // Evaluate the title
//       .evaluate(function() {
//         return document.title;
//       })
//       .end()
//       // Asset the title is as expected
//       .then(function(title) {
//         title.should.equal("search results: fun times");
//         done();
//       });
//   });
//
//   it("should fail", function() {
//     throw new Error(
//       "Failed on purpose, just to make the Mocha output more interesting."
//     );
//   });
// });
