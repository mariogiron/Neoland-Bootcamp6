const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("¿Cuál es el nombre de una persona real? ", function (answer) {
    let stream = fs.createWriteStream(`./ficheros/${answer}.md`);
    stream.write(`## ${answer}\n\n`);
    rl.setPrompt(`¿Qué dice ${answer}? `);
    rl.prompt();
    rl.on('line', function (saying) {
        if (saying.toLowerCase().trim() === 'exit') {
            stream.close();
            rl.close();
        } else {
            stream.write(`* ${saying.trim()}\n`);
            rl.setPrompt(`¿Qué más dice ${answer}? ('exit' para salir) `);
            rl.prompt();
        }
    });
});

rl.on('close', function () {
    process.exit();
});