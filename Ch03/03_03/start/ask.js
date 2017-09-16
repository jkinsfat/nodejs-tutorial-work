var questions = [
    "What is your name?",
    "What is your favorite color?",
    "What is your preferred programming language?"
];

var answers = [];

function printQuestions(lines) {
    if (Array.isArray(lines)) {
        for (line of lines) {
            process.stdout.write(`${line} \n`);
        }
    } else {
        process.stdout.write(`${line} \n`);
    }
}

function ask(i) {
    process.stdout.write(`\n\n\n\n ${questions[i]}`);
    process.stdout.write("  >   ");
}

process.stdin.on("data", function(data) {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})

process.on('exit', function() {
    process.stdout.write(` \n\n Go ${answers[1]} ${answers[0]}, finish your ${answers[2]} project \n\n`)
})
ask(0)
