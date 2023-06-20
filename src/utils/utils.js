import {MovieApi} from "./MovieApi";
import {moviesUrl} from "./constants";
import {MainApi} from "./MainApi";

export const api = new MovieApi(moviesUrl);

export const mainApi = new MainApi('https://api.kemrankrm-mesto.nomoredomains.work');


export const handleWindowResize = () => {
    const windowWidth = window.innerWidth;

    return windowWidth
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
