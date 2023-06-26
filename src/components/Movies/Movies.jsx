import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import Preloader from "../Preloader/Preloader";
import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {
    LARGE_SCREEN_CARDS_NUMBER, LARGE_SCREEN_SIZE,
    MID_SCREEN_CARDS_NUMBER,
    MID_SCREEN_SIZE, ONE_CARD_IN_ROW,
    SMALL_SCREEN_CARDS_NUMBER, THREE_CARD_IN_ROW, TWO_CARD_IN_ROW
} from "../../utils/constants";

const Movies = ({ windowSize, savedMovies, setSavedMovies }) => {
    const [movies, setMovies] = useState([]);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [cardsNumber, setCardsNumber] = useState({ initialCardNum: 12, cardsInRow: 3 })

    const location = useLocation();
    localStorage.setItem('url', location.pathname);

    const handleWindowSize = () => {
        if (windowSize < MID_SCREEN_SIZE) {
            return SMALL_SCREEN_CARDS_NUMBER
        } else if (windowSize < LARGE_SCREEN_SIZE) {
            return MID_SCREEN_CARDS_NUMBER
        } else {
            return LARGE_SCREEN_CARDS_NUMBER
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
        if (windowSize < MID_SCREEN_SIZE) {
            setCardsNumber({
                initialCardNum: SMALL_SCREEN_CARDS_NUMBER,
                cardsInRow: ONE_CARD_IN_ROW
            })
        } else if (windowSize < LARGE_SCREEN_SIZE) {
            setCardsNumber({
                initialCardNum: MID_SCREEN_CARDS_NUMBER,
                cardsInRow: TWO_CARD_IN_ROW
            })
        } else {
            setCardsNumber({
                initialCardNum: LARGE_SCREEN_CARDS_NUMBER,
                cardsInRow: THREE_CARD_IN_ROW })
        }
    }, [windowSize])

    useEffect(() => {

        const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));

        if (foundMovies) {
            setMovies(foundMovies);
        }
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
