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

vorpal
    .command('preguntas', 'Pequeño test con preguntas')
    .action(function (args, callback) {
        return this.prompt([
            {
                type: 'list',
                message: 'Selecciona una de las opciones',
                name: 'opciones',
                choices: ['primera', 'segunda', 'tercera']
            },
            {
                type: 'confirm',
                message: '¿De verdad quieres eso?',
                name: 'confirmacion'
            },
            {
                type: 'input',
                message: 'Dime tu nombre',
                name: 'nombre',
                default: 'Mario Girón'
            }
        ], function (results) {
            console.log(results);
            callback();
        });
    });