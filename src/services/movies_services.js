import axios from "axios";

  export async function imdb(){
      return await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=cb20c00b577e24ff1991b28eedaa66c6`);

  }
  export async function imdb_page(page){
    return await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=cb20c00b577e24ff1991b28eedaa66c6`);

}
export async function search_movies(search,page){
  return await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=cb20c00b577e24ff1991b28eedaa66c6&page=${page}`);
}
  
export async function genre_movies(genre,page){
  return await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=cb20c00b577e24ff1991b28eedaa66c6&page=${page}`);
}
