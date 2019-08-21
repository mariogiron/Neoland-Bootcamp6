const chalk = require('chalk');
const axios = require('axios');

console.log(chalk.bgWhite.redBright('Comienza la MANDANGA!'));

(async () => {
    let response = await axios.get('https://swapi.co/api/planets/?format=json');
    // console.log('PRIMERA: ', response.data);
})();

axios.get('http://www.google.es')
    .then(response => {
        // console.log(response);
    })
    .catch(err => console.log(chalk.red(err.message)))

console.time('Peticion1');
axios.get('https://swapi.co/api/planets/?format=json')
    .then(response => {
        let arrPlanetas = response.data.results;
        let arrPlanetasNuevo = arrPlanetas.map(planeta => {
            return planeta.name
        })
        return arrPlanetasNuevo;
    })
    .then((planetas) => {
        console.log(planetas);
        return planetas.length;
    })
    .then((numPlanetas) => {
        console.log(numPlanetas)
        console.timeEnd('Peticion1');
    })

console.time('Peticion2')
axios.get('https://swapi.co/api/planets/?format=json')
    .then(response => response.data.results.map(planeta => planeta.name))
    .then((planetas) => {
        console.log(planetas);
        return planetas.length;
    })
    .then((numPlanetas) => {
        console.log(numPlanetas)
        console.timeEnd('Peticion2')
    })