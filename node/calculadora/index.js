const operaciones = require('./operaciones');
const mensajes = require('./mensajes');
const log = console.log;

log(operaciones.suma(5, 6));
log(mensajes.saludo);
log(mensajes.saludar('Holita'));

log(__dirname);
log(__filename);

log(process.argv);