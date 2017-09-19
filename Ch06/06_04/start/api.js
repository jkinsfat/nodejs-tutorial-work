const http = require("http");
const fs = require("fs");
const path = require("path");
const HOST = 8000;
const data = require("./data/inventory");

let server = http.createServer(function(req, res) {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data));
    } else if (req.url === "/instock") {
        listInStock(res);
    } else if (req.url === "/onbackorder") {
        listOnBackOrder(res);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end("404 Resource not Found");
    }
}).listen(HOST, function() {
    console.log("Listening on port: " + HOST);
})

function listInStock(res) {
    let inStock = data.filter(function(item) {
        return item.avail === "In stock";
    });
    res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res) {
    let onBackOrder = data.filter(function(item) {
        return item.avail === "On back order";
    });
    res.end(JSON.stringify(onBackOrder));
}
