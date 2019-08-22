const axios = require('axios');
const parser = require('fast-xml-parser');
const got = require('got');
const terminalImage = require('terminal-image');

module.exports = async () => {

    let response = await axios.get('https://datos.madrid.es/egob/catalogo/202088-0-trafico-camaras.kml');
    let dataJSON = response.data;
    let data = parser.parse(dataJSON);
    // Recupero la información de las cámaras basándome en la estructura del fichero KML
    let cameras = data.kml.Document.Placemark;

    let randomNum = Math.round(Math.random() * (cameras.length - 1));
    let camera = cameras[randomNum]
    let cameraInfo = camera.ExtendedData;
    console.log(camera.description);

    let imgIndex = camera.description.indexOf('img src=') + 8;
    let blankIndex = camera.description.indexOf(' ', imgIndex);
    let urlImage = camera.description.substring(imgIndex, blankIndex);

    const { body } = await got(urlImage, { encoding: null });
    console.log(await terminalImage.buffer(body));

}