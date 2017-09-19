const http = require("http");
const fs = require("fs");
const HOST = 8000;

http.createServer(function(req, res) {
    if (req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./public/form.html").pipe(res);
    } else if (req.method === "POST"){
        var body = "";
        req.on("data", function(chunk) {
            body += chunk;
        });
        req.on("end", function(chunk) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(`
                <!DOCTYPE HTML>
                <html>
                    <head>
                        <title>Form Results</title>
                    </head>
                    <body>
                        <h1>Your Form Results</h1>
                        <p>${body}</p>
                    </body>
                </html>
            `);
        });
    }
}).listen(HOST, function() {
    console.log("Listening on port " + HOST);
})
