var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;

	//Creat new Write Stream
	var stream = fs.createWriteStream(`${realPerson.name}.md`);
	//Write file header
	stream.write(`${realPerson.name} \n=================\n\n`);

	rl.setPrompt(`What would ${realPerson.name} say? `);
	rl.prompt();

	rl.on("line", function(saying) {
		//If the user inputs "exit", close the filestream and readline and end the main process
		if (saying.toLowerCase() === "exit") {
			//Close the stream
			stream.close();
			//Close the readline interface
			rl.close();
		} else {
			realPerson.sayings.push(saying.trim());
			stream.write(`* ${saying.trim()} \n`);

			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
			rl.prompt();
		}
	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});
