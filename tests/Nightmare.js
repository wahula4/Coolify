var Nightmare = require('nightmare');
var nightmare = Nightmare({
  show: true,
  executionTimeout: 1000
});
const test = () => {
  nightmare
  .goto('http://localhost:8080/main')
  .type('#term', 'This is whatever')
  .click('.btn-primary')
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
    .type('#input_0', 'thisIsAUser')
    .type('#input_1', '444444')
    .click('button')
    .end()
    .then(function (result) {
      console.log(typeof result);
      console.log(result);
    })
    .catch(function (error) {
      console.error('Search failed:', error);
    });
}
