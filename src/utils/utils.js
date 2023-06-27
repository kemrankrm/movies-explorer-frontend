import {MovieApi} from "./MovieApi";
import {mainApiUrl, moviesUrl} from "./constants";
import {MainApi} from "./MainApi";

export const api = new MovieApi(moviesUrl);

export const mainApi = new MainApi(mainApiUrl);

export const handleWindowResize = () => {
    return window.innerWidth
}

export const handleUrlSave = (url) => {
    localStorage.setItem('prevUrl', url);
}

export const handleSearch = (keyword, checkboxState, res) => {
    const movieSearch = keyword.toLowerCase();
    const checkboxChecked = checkboxState;

    return res.filter(movie => {
        const nameRU = movie.nameRU.toLowerCase();
        const nameEN = movie.nameEN.toLowerCase();
        const durationLessThan40 = movie.duration < 40;

        const includeSearch = nameRU.includes(movieSearch) || nameEN.includes(movieSearch);
        const checkboxCondition = checkboxChecked ? durationLessThan40 : !durationLessThan40;

        return includeSearch && checkboxCondition;
    })
}

export const filterShortMovies = (movies) => movies.filter(
    (movieItem) => movieItem.duration <= 40
);

export const handleArraySlice = (start, end, movies, setMovies, isShort) => {
    let slicedMovies;

    slicedMovies = movies;

    if (isShort) {
        slicedMovies = filterShortMovies(movies);
    }

    slicedMovies = slicedMovies.slice(start, end);
    setMovies(slicedMovies)
}
