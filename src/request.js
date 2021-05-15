const API_KEY="5a429185276650c7cf70baed495d720f";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, 
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}
export default requests;