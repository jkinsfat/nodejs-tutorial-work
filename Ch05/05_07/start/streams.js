const fs = require("fs");

// fs.readFile("chat.log", "UTF-8", function(err, chatlog) {
//     if(err) {
//         throw err;
//     }
//     console.log(`File Read ${chatlog.length}`)
// })

const stream = fs.createReadStream("./chat.log", "UTF-8");
var data = "";
chunkNumber = 0;

stream.once("data", function() {
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
})
stream.on("data", function(chunk) {
    chunkNumber += 1;
    process.stdout.write(`  chunk: ${chunkNumber} |`);
    data += chunk;
})

stream.on("end", function() {
    console.log("\n\n\n");
    console.log(`Finished Reading File ${data.length}`);
    console.log("\n\n\n");
})
