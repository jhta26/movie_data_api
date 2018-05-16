const fetch = require("isomorphic-fetch")

class MovieAPIController {
    // constructor() {

    // }

    async getMovieInfoTMDB(req,res,next) {
    	
        let TMDBRequest = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=4d5bf8d10c6b03d87d1ad39ff4d7e296&language=en-US&query=${
        req.params.search
      }&page=1&include_adult=false`,{mode:'no-cors'})
        let TMDBResponse = await TMDBRequest.json()
       // console.log(req.params.search,TMDBResponse)
        res.status(200).json(TMDBResponse);

    }
}

module.exports = MovieAPIController
