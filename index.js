const axios = require('axios');
var ObjectID = require('mongodb').ObjectID;
const querystring = require('querystring');

/**
 * 
 * 
 * Axios is a "Promise based HTTP client for the browser and node.js"
 * meanning all axios methods retorn a promise object.
 */



const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});


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


const getMoviesById = (axiosInstance,movieId) =>{
    return new Promise((resolve, reject) => {
        axiosInstance.request({
            method: 'get',
            url: `/movie/${movieId}`,
         
        })
        .then((response) => resolve(response.data))
        .catch((msg) => reject(`<<<Error in getAllMovie>>> msg ->  ${msg}`));

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




/**
 * 
 */
deleteMovie = (axiosInstance,movieId) =>{
    return new Promise((resolve, reject) => {
        axiosInstance.request({
            method: 'delete',
            url: '/movie/' + movieId
        })
        .then((response) => resolve(response.data))
        .catch((msg) => reject(`Error in delete Movie ${msg}`));

    })
}









/**
 * 
 * Remember the diffrent between [URL Parameters] and POST Parameters
 * 
 * URL Parameters : 
 * http://example.com/api/users?id=4&token=sdfa3&geo=us
 * URL Parameters are grabbed using req.param.variable_name
 * 
 * POST Parameters : 
 * These are information that come from forms
 * POST Parameters are grabbed using req.body.variable_name
 * 
 * 
 * 
 * I won to perform the following operation in ordet to test te rest api 
 * 1. get the curent nuber of user on the system.
 * 2. post new user 
 * 3. get the curent nuber of user on the system and compare it with the pree added number.
 * 4. delete the privously create user.
 * 
 * this main will perform operation :
 * GET - /api/movies                      [v]
 * GET - /api/movies-length               [v]
 * GET - /api/movie/:id                   []
 * 
 * 
 * 
 * 
 */
(async()=>{

    // const len = await getMoviesLength(instance);// equvalent to const len = await getMoviesLength(instance).then(requestResult =>  requestResult)
    // console.log(len);

    // allMoviesData = await getAllMovie(instance).then(requestResult =>  requestResult);
    // console.log(allMoviesData);


    const movie = await getMoviesById(instance,"5f7c1d58ceeebf307850efc0!");
    console.log(movie);




    // data =  {
    //     "name": "Test Moview : jest",
    //     "time": ["12:34", "12:34"],
    //     "rating": 10.0
    // }
    // let createMovieResponse = await createNewMovie(instance,data);
    // let createdMovieId = createMovieResponse.id;
    // console.log(createdMovieId);


    // let deletedMovie = await deleteMovie(instance,createdMovieId);
    // console.log(deletedMovie);
    
    


    console.log('End of main ...');
  
   
})();