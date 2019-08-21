const fs = require('fs');

// fs.readdir('./ficheros', (err, files) => {
//     if (err) return console.log(`ERROR: ${err.message}`);
//     for (let file of files) {
//         if (file.endsWith('.md')) {
//             leerFichero(file);
//         }
//     }
// })

function leerFichero(fileName) {
    fs.readFile(`./ficheros/${fileName}`, 'UTF-8', (err, content) => {
        if (err) return console.log(`ERROR: ${err.message}`);
        console.log(content);
    })
}

fs.readdir('./ficheros', (err, files) => {
    if (err) return console.log(`ERROR: ${err.message}`);

    files.filter(file => file.endsWith('.md')).forEach(file => {
        leerFichero(file);
    });
});