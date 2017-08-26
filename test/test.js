var should = require('chai').should();
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });



// testing front end user features. What happens when input is submitted.
describe("claimMatch", function(){

  it("should check if unique attributes are equal", function () {
    claimMatch('Patterned').should.equal('Patterned')
  });

  it("should fail if unique attribute and submitted answer is unequal", function() {
    claimMatch('Patterned').should.not.equal('Solid')
  });

// test for home page to lost page, to adding an item to the database.

nightmare
  .click('html > body > div.container:nth-child(2) > nav.navbar:nth-child(1) > div.collapse.navbar-collapse.navbar-ex1-collapse:nth-child(2) > ul.nav.navbar-nav:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
  .click('div#addItem > div.formHead:nth-child(2) > div.ui.vertical.accordion.menu:nth-child(1) > div.item:nth-child(1) > a.title.active:nth-child(1)')
  .click('div#addItem > div.formHead:nth-child(2) > div.ui.vertical.accordion.menu:nth-child(1) > div.item:nth-child(1) > div.content.active:nth-child(2) > div.ui.form.transition.visible:nth-child(1) > div.grouped.fields:nth-child(1) > div.field:nth-child(3) > div.ui.radio.checkbox.checked:nth-child(1) > label:nth-child(2)')
  .click('div#addItem > div.formHead:nth-child(2) > div.ui.vertical.accordion.menu:nth-child(1) > div.item:nth-child(2)')
  .click('div#addItem > div.formHead:nth-child(2) > div.ui.vertical.accordion.menu:nth-child(1) > div.item:nth-child(2) > a.title.active:nth-child(1) > i.dropdown.icon:nth-child(1)')
  .click('div#addItem > div.formHead:nth-child(2) > div.ui.vertical.accordion.menu:nth-child(1) > div.item:nth-child(2) > div.content.active:nth-child(2) > div.ui.form.transition.visible:nth-child(1) > div.grouped.fields:nth-child(1) > div.field:nth-child(4) > div.ui.radio.checkbox.checked:nth-child(1) > label:nth-child(2)')
  .click('div#addItem > div.formHead:nth-child(2) > div.ui.vertical.accordion.menu:nth-child(1) > div.item:nth-child(3) > a.title.active:nth-child(1)')
  .click('div#addItem > div.formHead:nth-child(2) > div.ui.vertical.accordion.menu:nth-child(1) > div.item:nth-child(3) > div.content.active:nth-child(2) > div.ui.form.transition.visible:nth-child(1) > div.grouped.fields:nth-child(1) > div.field:nth-child(1) > div.ui.radio.checkbox.checked:nth-child(1) > label:nth-child(2)')
  .click('div#addItem > div.formHead:nth-child(2) > div.ui.vertical.accordion.menu:nth-child(1) > div.item:nth-child(4) > a.title.active:nth-child(1)')
  .click('div#addItem > div.formHead:nth-child(2) > div.ui.vertical.accordion.menu:nth-child(1) > div.item:nth-child(4) > div.content.active:nth-child(2) > div.ui.form.transition.visible:nth-child(1) > div.grouped.fields:nth-child(1) > div.field:nth-child(1) > div.ui.radio.checkbox.checked:nth-child(1) > label:nth-child(2)')
  .click('div#addItem > div.formHead:nth-child(2) > div.ui.vertical.accordion.menu:nth-child(1) > div.item:nth-child(5) > a.title.active:nth-child(1)')
  .click('input#location')
  .click('input#submitItem')
  .click('tbody#items > tr:nth-child(1) > td:nth-child(5) > button:nth-child(1)')
  .click('div#intro > div.actions:nth-child(4) > div.ui.black.deny.button:nth-child(1)')
  .click('html > body.dimmable > div.ui.dimmer.modals.page.transition.visible.active.animating.fade.out:nth-child(7)')
  .end()
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
});
