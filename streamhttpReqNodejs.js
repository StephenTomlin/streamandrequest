var http = require("http");

var requestOptions = {
  host: "www.google.com",
  path: "/"
};

http.get(requestOptions, (response) => {    // HTTP Response Callback

  response.setEncoding("utf8");             // Use UTF-8 encoding

  response.on("data", function(data) {           // On Data Received
    console.log("Chunk Received. Length:", data.length);
    printExampleHTML(data);
  });

  response.on("end", function() {                // On Data Completed
    console.log("Response stream complete.");
  });

});
function printExampleHTML(callback) {
  console.log(callback)
}