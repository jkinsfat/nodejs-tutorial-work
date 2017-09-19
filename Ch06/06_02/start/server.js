var http = require("http");

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`<!DOCTYPE HTML>
        <html>
            <body>
                <h1>Serving HTML text</h1>
                <p>${req.url}</p>
                <p>${req.method}</p>
            </body>
        </html>
    `);
});

server.listen(8000)

console.log("Server listening on port 8000")
