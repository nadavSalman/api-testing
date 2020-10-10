const Movie = require('../models/movie-model')
const mongoose = require('mongoose')


createMovie = (req, res) => {
    console.log('create a new movie ....');
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const movie = new Movie(body)

    if (!movie) {
        return res.status(400).json({ success: false, error: err })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
}

updateMovie = async (req, res) => {
    console.log('updateMovie call ....');
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    console.log(req.params.id);
    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        movie.name = body.name
        movie.time = body.time
        movie.rating = body.rating
        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            })
    })
}

deleteMovie = async (req, res) => {
    console.log("delete movie ...");
    await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            console.log(error);
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getMovieById = async (req, res) => {
    //log(req);
    //let reqId = await mongoose.Types.ObjectId(req.params.id);
    console.log(`req.params -> ${req.params} | ${Object.keys(req.params)}`);
    console.log(req.params.id.id);
    var movie_id = req.param('id');
    console.log(`req.param('id') -> ${movie_id}`);
    await Movie.findOne({ _id:req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getMovies = async (req, res) => {
    console.log('get all movies....');
    await Movie.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}


getCollectionsLength = async (req, res) => {
    console.log('get getCollectionsLength....');
    await Movie.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movies.length })
    }).catch(err => console.log(err))
}

module.exports = {
    getCollectionsLength,
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById,
}
