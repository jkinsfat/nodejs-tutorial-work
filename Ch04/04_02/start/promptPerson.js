const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
    name: "",
    quotes: []
}

rl.question("What is the name of a real person? ", function(answer) {
    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();
    rl.on("line", function(quote) {
        if (quote.toLowerCase().trim() === "exit") {
            rl.close();
        } else {
            realPerson.quotes.push(quote.trim());
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
            rl.prompt();
        }
    });
});

rl.on("close", function() {
    console.log("%s is a real person who says %j", realPerson.name, realPerson.quotes);
    process.exit();
});
