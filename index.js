const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.run()
    .then((res) => console.log(res));//it will CLI{} because it's outside of the class scope
        