const connection = require('../data/db');


//index
const index = (req, res) => {
    connection.query("SELECT * FROM movie", (err, movieResults) => {
        if(err){
                res.status(500).json({error: "Database query failed:" +err });
            }

        res.json(movieResults);
    })
}

const show = (req, res) => {
    console.log('dettaglio film');
}

module.exports = {
    index,
    show
}