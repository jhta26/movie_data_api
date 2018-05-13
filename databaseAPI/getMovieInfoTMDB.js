const getMovieInfoTMDB = async (searchInput) => {
    let TMDBRequest = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=4d5bf8d10c6b03d87d1ad39ff4d7e296&language=en-US&query=${
        searchInput
      }&page=1&include_adult=false`)
    let TMDBResponse = await TMDBRequest.json()
    let results = await TMDBResponse.results
    return results

}

export default getMovieInfoTMDB;

