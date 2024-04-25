import axios from "axios";
const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmMyZTk4YTY4YmM0MmYwMTEyMjI3NjBmMDY3MTAyMyIsInN1YiI6IjY2MmEzYWUwYmYzMWYyMDA5YmUzNDI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.81a9ukE9LW2yHS9NbJ8zFTGgIuZmtfWq9Vz5SXUEoos'
  }
};

export async function getPopularMovies(){
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  const responce = await axios.get( url, options)
  return responce.data.results ;
  // console.log(responce.data.results)
}

export async function getMovie(movie){
  const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`
  const responce = await axios.get(url, options);

  return responce.data.results;
}

export async function getMovieByid(movieId){
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    const responce = await axios.get(url, options)
    return responce.data;
}

export async function getMovieCast(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const responce = await axios.get(url, options);

  return responce.data.cast;
}

export async function getMovieReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`
  const responce = await axios.get(url, options);

  return responce.data.results;
}