var exec = require('child_process').exec;

exec("git version", function(err, stdout) {
    if(err) {
        throw err;
    }
    console.log("Finished");
    console.log(`${stdout}`);
});
