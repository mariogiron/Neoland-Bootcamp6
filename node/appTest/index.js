const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Neoland!!');
});

app.listen(3000, () => {
    console.log('App escuchando sobre el puerto 3000...');
});