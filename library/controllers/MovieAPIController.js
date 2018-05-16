const fetch = require("isomorphic-fetch")

class MovieAPIController {


    async getMovieInfoTMDB(req, res, next) {
        var myInit = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        let TMDBRequest = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=4d5bf8d10c6b03d87d1ad39ff4d7e296&language=en-US&query=${
        req.params.search
      }&page=1&include_adult=false`, myInit)
        let TMDBResponse = await TMDBRequest.json()
        let responseObject = TMDBResponse
        res.set({ 'access-content-allow-origin': ['*'] }).status(200).json(responseObject);
    }
}

module.exports = MovieAPIController