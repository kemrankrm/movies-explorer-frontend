import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import Preloader from "../Preloader/Preloader";
import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {
    LARGE_SCREEN_CARDS_NUMBER,
    LARGE_SCREEN_SIZE,
    MID_SCREEN_CARDS_NUMBER,
    MID_SCREEN_SIZE,
    ONE_CARD_IN_ROW,
    SMALL_SCREEN_CARDS_NUMBER,
    THREE_CARD_IN_ROW,
    TWO_CARD_IN_ROW
} from "../../utils/constants";
import { handleArraySlice } from '../../utils/utils';

const handleWindowSize = (windowSize) => {
    if (windowSize < MID_SCREEN_SIZE) {
        return SMALL_SCREEN_CARDS_NUMBER
    } else if (windowSize < LARGE_SCREEN_SIZE) {
        return MID_SCREEN_CARDS_NUMBER
    } else {
        return LARGE_SCREEN_CARDS_NUMBER
    }
}

const Movies = ({ windowSize, savedMovies, setSavedMovies }) => {
    const [movies, setMovies] = useState([]);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [cardsNumber, setCardsNumber] = useState({ initialCardNum: 12, cardsInRow: 3 })
    const [isShort, setIsShort] = useState(false);
    const location = useLocation();
    const next = useRef(handleWindowSize(windowSize));

    const handleShowMoreMovies = () => {
        next.current = next.current + cardsNumber.cardsInRow;
        handleArraySlice(0, next.current, movies, setMoviesToShow, isShort);
    }

    useEffect(() => {
        localStorage.setItem('url', location.pathname);
    }, [location.pathname])

    useEffect(() => {
        handleArraySlice(0, cardsNumber.initialCardNum, movies, setMoviesToShow, isShort);
    }, [movies, isShort])

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
                cardsInRow: THREE_CARD_IN_ROW
            })
        }
    }, [windowSize])

    useEffect(() => {
        const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
        foundMovies.length && setMovies(foundMovies)
    }, [])

    return (
        <section className={'movies'}>
            <SearchForm
                setIsShort={setIsShort}
                isShort={isShort}
                setMovies={setMovies}
                savedMovies={false}
            />
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
    )
}

export default Movies
