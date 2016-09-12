var request = require('request');
function printExampleHTML(callback) {
  request('http://www.google.com', function (error, response, body) {
    if (error) {
      throw error;
    }
    callback(body);
  });

}

function printHTML(body) {
  console.log(body)
}
printExampleHTML(printHTML)

