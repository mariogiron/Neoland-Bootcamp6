const puppeteer = require('puppeteer');
const axios = require('axios');

let url = "https://www.idealista.com/venta-viviendas/madrid-provincia";

let casas = [];

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url + '/');

    await page.waitForSelector('.items-container');

    let numCasas = await page.$eval('.listing-title', h1 => h1.innerText.split(' ')[0].trim());
    console.log(numCasas);
    let cont = 1;

    while (cont <= Math.ceil(parseInt(numCasas.replace('.', '')) / 30)) {
        await page.goto(`${url}/pagina-${cont}.htm`);

        let articulos = await page.$$('article.item');

        for (let i = 0; i < articulos.length; i++) {
            let casa = {};
            casa.enlace = await articulos[i].$eval('.item-info-container .item-link', a => a.href.trim())
            casa.titulo = await articulos[i].$eval('.item-info-container .item-link', a => a.innerText.trim())
            casa.precio = await articulos[i].$eval('.item-info-container .price-row .item-price', span => span.innerText.trim())
            casas.push(casa);
        }
        cont++;
    }



    await browser.close();

    console.log(casas);
    console.log(casas.length);
})();