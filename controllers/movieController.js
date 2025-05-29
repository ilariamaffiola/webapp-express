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
    const movieSql = "SELECT * FROM movies WHERE id = ?";

    //query per il recupero delle recensioni del film recuperato
    const reviewsSql = `
        SELECT *
        FROM reviews
        WHERE movie_id = ?
    `
    //eseguo la query per recuperare il film 
    connection.query(movieSql, [id], (err, movieResult) => {
        if(err) return res.status(500).json({error: "Database query failed:" +err });

        if(movieResult.length===0 || movieResult[0].id ===null) return res.status(404).json({error: "Movie not found"});
        const movie = movieResult[0];
        //eseguo la query per il recupero delle rensioni
        connection.query(reviewsSql, [id], (err, reviewResult) => {
            if(err) return res.status(500).json({error: "Database query failed:" +err });

        })

        return res.json(movieResult);

    })
}

module.exports = {
    index,
    show
}