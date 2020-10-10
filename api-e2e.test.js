const axios = require('axios');
const apiRequestsUtil = require('./apiRequestUtil');



let instance = null;
const movieId = 123;

beforeAll(() => {
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    instance = axios.create({
        baseURL: 'http://localhost:3000/api/',
        timeout: 5000,
        headers: {'X-Custom-Header': 'foobar'}
    });
});




/**
 * E2e test the api functionality.
 * 1. get the curent nuber of user on the system.
 * 2. post new user 
 * 3. get the curent nuber of user on the system and compare it with the pree added number.
 * 4. delete the privously create user.
 */
test('E2e ', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });