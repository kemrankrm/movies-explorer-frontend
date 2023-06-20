import './MovieCardList.css'
import {baseUrl} from "../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import { mainApi} from "../../utils/utils";
import {useLocation} from "react-router-dom";

const MoviesCardList = ({ movies, setMovies, savedMovies, setSavedMovies }) => {
    const location = useLocation();
    let isSavedList = false;
    if (location.pathname === '/saved-movies') {
        isSavedList = true;
    }

    const handleMovieSave = (e) => {
        const id = e.target.id;
        const movie = movies.find(movie => movie.id === +id)

        const token = localStorage.getItem('jwt');
        if (token) {
            mainApi.saveMovie(movie, token)
                .then(res => res.json())
                .then(res => {
                    setSavedMovies([...savedMovies, res]);
                });
        }
    }

    const handleMovieRemove = (e) => {
        const id = e.currentTarget.id

        const foundMovie = savedMovies?.find(savedMovie => savedMovie.movieId === +id)
        const token = localStorage.getItem('jwt');
        if (token) {
            mainApi.removeMovie(foundMovie._id, token)
                .then(res => {
                    const newMovieList = movies.filter(movie => movie._id !== foundMovie._id)
                    if (res.ok) {
                        if (isSavedList) {
                            setMovies(newMovieList);
                        } else {
                            mainApi.getMovies(token)
                                .then(res => {
                                    setSavedMovies(res);
                                })
                        }
                    }
                })
        }
    }

    return (
        <section className={'movies-list'}>
            <div className={'movies-list__container'}>
                {
                    movies && movies.map(movie => {
                        const isSaved = savedMovies?.find(savedMovie => savedMovie.movieId === movie.id)

                        return (
                            <MoviesCard
                                title={movie.nameRU}
                                duration={movie.duration}
                                image={
                                location.pathname !== '/saved-movies'
                                 ? baseUrl + '/' + movie.image.url
                                    : movie.image
                                }
                                key={isSavedList
                                    ? movie._id
                                    : movie.id}
                                id={isSavedList
                                    ? movie.movieId : movie.id}
                                onSave={handleMovieSave}
                                onRemove={handleMovieRemove}
                                setMovies={setMovies}
                                saved={isSavedList ? true : isSaved}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MoviesCardList
