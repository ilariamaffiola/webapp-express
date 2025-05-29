const connection = require('../data/db');


//index
const index = (req, res) => {
    connection.query("SELECT * FROM movie", (err, movieResults) => {
        if(err) return res.status(500).json({error: "Database query failed:" +err });
            

        res.json(movieResults);
    })
}
//show
const show = (req, res) => {
    //recupero l'id
    const { id } = req.params

    //query per il recupero del film avente id recuperato
    const movieSql = "SELECT * FROM moovies WHERE id = ?";

    //query per il recupero delle recensioni del film recuperato
    const reviewsSql = `
        SELECT *
        FROM reviews
        WHERE movie_id = ?
    `
    //eseguo la query per recuperare il film 
    connection.query(movieSql, [id], (err, movieResult) => {
        if(err) return res.status(500).json({error: "Database query failed:" +err });
        

    })
}

module.exports = {
    index,
    show
}