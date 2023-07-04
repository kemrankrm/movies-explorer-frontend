import './MovieCardList.css'
import {baseUrl} from "../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import { mainApi} from "../../utils/utils";
import {useLocation} from "react-router-dom";
import { useEffect, useState } from 'react';

const MoviesCardList = ({ movies, setMovies, savedMovies, setSavedMovies }) => {
    const location = useLocation();
    const [isSavedList, setIsSavedList] = useState(false);
    const [isNoMovies, setIsNoMovies] = useState(false)

    useEffect(() => {
        if (location.pathname === '/saved-movies') {
            setIsSavedList(true);
        }
    }, [location.pathname])

    useEffect(() => {
        setIsNoMovies(!movies.length)
    }, [movies])

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

    const filterMovies = (movies, foundMovie) => movies.filter(movie => movie._id !== foundMovie._id)

    const handleMovieRemove = (e) => {
        const id = e.currentTarget.id

        const foundMovie = savedMovies?.find(savedMovie => savedMovie.movieId === +id)
        const token = localStorage.getItem('jwt');

        if (token) {
            mainApi.removeMovie(foundMovie._id, token)
                .then(res => {
                    if (res.ok) {
                        if (isSavedList) {
                            setMovies(filterMovies(movies, foundMovie));
                        } else {
                            setSavedMovies(filterMovies(savedMovies, foundMovie));
                        }
                    }
                })
        }
    }

    const checkIsSavedMovie = (savedMovies, movie) =>
        savedMovies?.find(savedMovie => savedMovie.movieId === movie.id)

    return (
        <section className={'movies-list'}>
            <div className={`movies-list__container${isNoMovies ? '_flex' : ''}`}>
                {
                    isNoMovies
                        ? <p className={'movies-list__no-movies'}>
                            НИЧЕГО НЕ НАЙДЕНО
                        </p>
                        : movies?.map((movie) => {
                            const isSaved = checkIsSavedMovie(savedMovies, movie);

                            return (
                                <MoviesCard
                                    title={movie.nameRU}
                                    duration={movie.duration}
                                    image={
                                        location.pathname !== '/saved-movies'
                                            ? baseUrl + '/' + movie.image.url
                                            : movie.image
                                    }
                                    key={isSavedList ? movie._id : movie.id}
                                    id={isSavedList ? movie.movieId : movie.id}
                                    onSave={handleMovieSave}
                                    onRemove={handleMovieRemove}
                                    setMovies={setMovies}
                                    saved={isSavedList || isSaved}
                                />
                            )
                        })
                }
            </div>
        </section>
    )
}

export default MoviesCardList
