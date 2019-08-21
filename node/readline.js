const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface(process.stdin, process.stdout);
const persona = {
    name: '',
    palabras: []
};

rl.question("¿Cuál es el nombre de una persona real? ", function (answer) {
    fs.appendFileSync(`./ficheros/${answer}.md`, `## Fichero de ${answer}\n\n`);
    rl.setPrompt(`¿Qué dice ${answer}? `);
    rl.prompt();
    rl.on('line', function (saying) {
        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            fs.appendFile(`./ficheros/${answer}.md`, `* ${saying}\n`, (err) => {
                if (err) throw err
                console.log('Datos agregados');
            });
            rl.setPrompt(`¿Qué más dice ${persona.name}? ('exit' para salir) `);
            rl.prompt();
        }
    });
});

rl.on('close', function () {
    console.log("%s es una persona real que dice %j", persona.name, persona.palabras);
    process.exit();
});