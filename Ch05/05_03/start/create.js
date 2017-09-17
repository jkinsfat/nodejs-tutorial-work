const fs = require("fs");

let md =  `

Sample Markdown title
=====================

Sample subTitle
---------------

*point
*point
*point

`;

fs.writeFile("sample.md", md.trim(), function(err) {
    if(err) {
        throw err;
    }
    console.log("File Created!!!")
})
