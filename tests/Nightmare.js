// import sinon from 'sinon';
var Nightmare = require('nightmare');
var nightmare = Nightmare({
  show: true,
  executionTimeout: 2000
});
const test = () => {
  nightmare
  .goto('http://localhost:8080/')
  .type('#term', 'This is a test')
  .click('.btn-primary')
  // .wait('.collapsible-body p')
  .evaluate(function () {
    return document.querySelector('.collapsible-body p').textContent;
  })
  .then(function (result) {
    console.log(typeof result);
    console.log(result);
    second();
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
}
test()

const second = () => {
  nightmare
    .goto('http://localhost:8080/signin')
    .type('#input_0', 'tony@mail.com')
    .type('#input_1', '123456')
    .click('button')
    // .wait()
    .end()
    .then(function (result) {
      console.log(typeof result);
      console.log(result);
    })
    .catch(function (error) {
      console.error('Search failed:', error);
    });
}
