const vorpal = require('vorpal')();
const chalk = vorpal.chalk;

const cameras = require('./cameras');

vorpal
    .delimiter('$ >')
    .show();

vorpal
    .command('saludar', 'Te saludo alegremente')
    .action((args, callback) => {
        console.log(chalk.blue('Holita!!'));
        callback();
    });

vorpal
    .command('camera', 'Muestro una cámara aleatoria')
    .action((args, callback) => {
        cameras().then(() => callback());
    })