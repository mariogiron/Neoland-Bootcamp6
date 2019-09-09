const axios = require('axios');

module.exports = async (ctx) => {
    let ciudad = ctx.message.text.split('/whereami')[1].trim();
    let response = await axios.get(`https://geocode.xyz/${ciudad}?json=1`);

    let lat = response.data.latt;
    let lng = response.data.longt;
    ctx.replyWithPhoto(`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=AIzaSyAvfQLA0IZSelivxAclOiBPxQ8U4eds85w`);
}