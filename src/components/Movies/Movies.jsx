import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import Preloader from "../Preloader/Preloader";
import {useEffect, useRef, useState} from "react";
import {api} from "../../utils/utils";
import {useLocation} from "react-router-dom";

const Movies = ({ windowSize, savedMovies, setSavedMovies }) => {
    const [movies, setMovies] = useState([]);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [cardsNumber, setCardsNumber] = useState({ initialCardNum: 12, cardsInRow: 3 })

    const location = useLocation();
    localStorage.setItem('url', location.pathname);

    const handleWindowSize = () => {
        if (windowSize < 768) {
            return 5
        } else if (windowSize < 1280) {
            return 8
        } else {
            return 12
        }
    }

    const next = useRef(handleWindowSize());

    const handleArraySlice = (start, end) => {
        const slicedArray = movies.slice(start, end);
        setMoviesToShow(slicedArray)
    }

    const handleShowMoreMovies = () => {
        next.current = next.current + cardsNumber.cardsInRow;
        handleArraySlice(0, next.current);
    }

    useEffect(() => {
        handleArraySlice(0, cardsNumber.initialCardNum);
    }, [movies])

    useEffect(() => {
        if (windowSize < 768) {
            setCardsNumber({ initialCardNum: 5, cardsInRow: 1 })
        } else if (windowSize < 1280) {
            setCardsNumber({ initialCardNum: 8, cardsInRow: 2 })
        } else {
            setCardsNumber({ initialCardNum: 12, cardsInRow: 3 })
        }
    }, [windowSize])

    useEffect(() => {
        api.getMovies()
            .then(res => {
                const movies = JSON.parse(localStorage.getItem('foundMovies'));
                if (movies) {
                    setMovies(movies)
                } else {
                    setMovies(res);
                }
            })
    }, [])

    return (
        <>
            <section className={'movies'}>
                <SearchForm setMovies={setMovies} savedMovies={false}/>
                <MovieCardList
                    movies={moviesToShow}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                />
                {
                    next.current >= movies.length
                    ? null
                    : <Preloader onClick={handleShowMoreMovies}/>
                }
            </section>
        </>
    )
}

export default Movies
