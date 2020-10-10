const axios = require('axios');








/**
 * 
 */
getAllMovie = (axiosInstance) =>{
    return new Promise((resolve, reject) => {
        axiosInstance.request({
            method: 'get',
            url: '/movies'
        })
        .then((response) => resolve(response.data))
        .catch((msg) => reject(`Error in getAllMovie ${msg}`));

    })
}


/**
 * 
 */
getMoviesLength = (axiosInstance) =>{
    return new Promise((resolve, reject) => {
        axiosInstance.request({
            method: 'get',
            url: '/movies-length'
        })
        .then((response) => resolve(response.data))
        .catch((msg) => reject(`Error in getAllMovie ${msg}`));

    })
}


/**
 * 
 */
createNewMovie = (axiosInstance,movieData) =>{
    return new Promise((resolve, reject) => {
        axiosInstance.request({
            method: 'post',
            url: '/movie',
            data: movieData
        })
        .then((response) => resolve(response.data))
        .catch((msg) => reject(`Error in createNewMovie ${msg}`));

    })
}


module.exports ={
    getAllMovie,
    getMoviesLength,
    createNewMovie
}