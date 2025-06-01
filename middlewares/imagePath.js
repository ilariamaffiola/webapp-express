const setimagePath = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}/img/movies`);

    req.imagePath = `${req.protocol}://${req.get('host')}/img/movies/`
    next()
};

module.exports = setimagePath;