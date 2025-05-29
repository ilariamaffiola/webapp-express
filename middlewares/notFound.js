function notFound (req, res, next) {
    res.status(404);
    res.json({
        error: 'Not Found',
        message: `page not found.`,
    });
    next();
}

module.exports = notFound;