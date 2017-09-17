const fs = require("fs");
const path = require("path");
// file = fs.readFileSync("./lib/sayings.md", "UTF-8")
// console.log(file)

// fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents) {
//     if(err) {
//         console.log(err);
//     }
// })

fs.readdir("./lib", function(err, files) {
    if (err) {
        console.log(err);
    }
    files.forEach(function(fileName) {
        var filePath = path.join(__dirname, "lib", fileName);
        var stats = fs.statSync(filePath);
        if (stats.isFile() && fileName !== ".DS_Store") {
            fs.readFile(filePath, "UTF-8", function(err, contents) {
                if (err) {
                    console.log(err);
                }
                console.log(contents);
            });
        }
    });
});
