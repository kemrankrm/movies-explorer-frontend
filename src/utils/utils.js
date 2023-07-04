import {MovieApi} from "./MovieApi";
import {mainApiUrl, moviesUrl} from "./constants";
import {MainApi} from "./MainApi";

export const api = new MovieApi(moviesUrl);

export const mainApi = new MainApi(mainApiUrl);

export const handleUrlSave = (url) => {
    localStorage.setItem('prevUrl', url);
}

export const handleSearch = (keyword, res) => {
    const movieSearch = keyword.toLowerCase();

    return res.filter(movie => {
        const nameRU = movie.nameRU.toLowerCase();
        const nameEN = movie.nameEN.toLowerCase();

        return nameRU.includes(movieSearch) || nameEN.includes(movieSearch);
    })
}

export const filterShortMovies = (movies) => movies.filter(
    (movieItem) => movieItem.duration <= 40
);

export const handleArraySlice = (start, end, movies, setMoviesToShow, isShort) => {
    let slicedMovies;

    slicedMovies = movies;

    if (isShort) {
        slicedMovies = filterShortMovies(movies);
    }

    slicedMovies = slicedMovies.slice(start, end);
    setMoviesToShow(slicedMovies)
}
