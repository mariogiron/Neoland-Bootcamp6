// Instalar las librerías
// Variable de entorno
// NGROK
require('dotenv').config();

const Telegraf = require('telegraf')
const express = require('express')
const expressApp = express()

const testCommand = require('./commands/test');
const weatherCommand = require('./commands/weather');
const whereamiCommand = require('./commands/whereami');

const bot = new Telegraf(process.env.BOT_TOKEN)
expressApp.use(bot.webhookCallback('/secret-path'))
bot.telegram.setWebhook('https://8d07598b.ngrok.io/secret-path')

expressApp.get('/', (req, res) => {
    res.send('Hello World!')
})

expressApp.post('/secret-path', (req, res) => {
    res.send('Petición POST del webhook');
})

bot.command('start', (ctx) => {
    console.log(ctx.message);
    ctx.reply('Bienvenido al BOT. /test Saludos');
})

bot.command('test', testCommand);
bot.command('weather', weatherCommand);
bot.command('whereami', whereamiCommand);

expressApp.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
