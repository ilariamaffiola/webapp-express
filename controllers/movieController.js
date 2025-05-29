const connection = require('../data/db');


//index
const index = (req, res) => {
    res.json('mi sto esaurendo quindi pusherò');
}

const show = (req, res) => {
    console.log('dettaglio film');
}

module.exports = {
    index,
    show
}