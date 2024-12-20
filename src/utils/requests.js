const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&include_adult=false`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&include_adult=false`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=36&include_adult=false`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
};

export default requests;
