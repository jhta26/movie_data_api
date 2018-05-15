class MovieAPIController {
    constructor() {

    }

    async getMovieInfoTMDB(searchInput) {
        let TMDBRequest = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${env.API_KEY}&language=en-US&query=${
        searchInput
      }&page=1&include_adult=false`)
        let TMDBResponse = await TMDBRequest.json()
        let results = await TMDBResponse.results
        return results

    }
}

module.exports = MovieAPIController
