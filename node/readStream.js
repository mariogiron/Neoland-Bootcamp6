const fs = require('fs');

const stream = fs.createReadStream('./ficheroGrande.txt', 'UTF-8');
let body = "";

stream.once('data', () => {
    console.log('Ha comenzado la lectura del fichero');
});

stream.on('data', (chunk) => {
    console.log('Recibiendo datos...');
    body += chunk;
});

stream.on('end', () => {
    console.log(body);
})