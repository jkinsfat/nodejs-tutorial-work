const https = require("https");
const fs = require("fs");

//We need an object literal of options to make a request
var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/Alexander_Hamilton",
    method: "GET"
}

//
var req = https.request(options, function(res) {
    var responseBody = "";
    console.log("Server Response has Begun.");
    console.log(`Server Status: ${res.statusCode} `);
    console.log("Response Headers: %j", res.headers);

    res.setEncoding("UTF-8");

    res.once("data", function(chunk) {
        console.log(chunk);
    });

    res.on("data", function(chunk) {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on("end", function() {
        fs.writeFile("alexanderHamilton.html", responseBody, function(err) {
            if (err) {
                throw err;
            }
            console.log("File Downloaded");
        })
    })
});

req.on("error", function(err) {
    console.log(`Problem with request: ${err.message}`);
});

req.end();
