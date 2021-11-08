export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";

export const handleSearch = (value) => {
  return {
    type: SEARCH_MOVIE,
    payload: value,
  };
};

export const handleFetchMovies = (e) => (dispatch) => {
  fetch(`https://www.omdbapi.com/?s=${e}&apikey=c32c4ab8`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: data.Search,
      });
    })
    .catch((e) => console.log("error:", e));
};

export const handleMovieInfo = (id) => (dispatch) => {
  fetch(`https://www.omdbapi.com/?i=${id}&apikey=c32c4ab8`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: FETCH_MOVIE,
        payload: data,
      });
    })
    .catch((e) => console.log("error:", e));
};
