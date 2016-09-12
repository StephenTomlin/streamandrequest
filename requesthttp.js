var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    printHTML(body); // Show the HTML for the Google homepage.
  }
});
function printHTML(callback) {
  console.log(callback)
}