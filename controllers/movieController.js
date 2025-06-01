const connection = require('../data/db');


//index
const index = (req, res) => {
    connection.query("SELECT * FROM movies", (err, movieResults) => {
        if(err) return res.status(500).json({error: "Database query failed:" +err });
        
        
        //ciclo l'array per aggiungere il nuovo path dell'immagine
        const movies = movieResults.map((movie) => {
            const obj = {
                ...movie, 
                image: req.imagePath + movie.image
            }
            return obj;

        })

        res.json(movies);
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
        connection.query(reviewsSql, [id], (err, reviewsResult) => {
            if(err) return res.status(500).json({error: "Database query failed:" +err });
            //aggiungo le recensioni al film
            movie.reviews = reviewsResult;
            
            return res.json(movie);
        })

        

    })
}

module.exports = {
    index,
    show
}