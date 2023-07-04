import './SavedMovies.css'
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { filterShortMovies, handleArraySlice } from '../../utils/utils';
import Loader from '../Loader/Loader';
import {
    LARGE_SCREEN_CARDS_NUMBER, LARGE_SCREEN_SIZE, MID_SCREEN_CARDS_NUMBER,
    MID_SCREEN_SIZE, ONE_CARD_IN_ROW,
    SMALL_SCREEN_CARDS_NUMBER,
    THREE_CARD_IN_ROW, TWO_CARD_IN_ROW
} from "../../utils/constants";

const SavedMovies = ({ windowSize, savedMovies, setSavedMovies }) => {
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [cardsNumber, setCardsNumber] = useState(
        {
            initialCardNum: LARGE_SCREEN_CARDS_NUMBER,
            cardsInRow: THREE_CARD_IN_ROW,
        })
    const [isLoading, setIsLoading] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const [moviesToCount, setIsMoviesToCount] = useState([])

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

    const handleShowMoreMovies = () => {
        next.current = next.current + cardsNumber.cardsInRow;
        handleArraySlice(0, next.current, savedMovies, setMoviesToShow, isShort);
    }

    useEffect(() => {
        handleArraySlice(
            0,
            cardsNumber.initialCardNum,
            savedMovies,
            setMoviesToShow,
            isShort
        );
    }, [savedMovies, isShort, cardsNumber, setSavedMovies])

    useEffect(() => {
        if (windowSize < MID_SCREEN_SIZE) {
            setCardsNumber({ initialCardNum: SMALL_SCREEN_CARDS_NUMBER, cardsInRow: ONE_CARD_IN_ROW })
        } else if (windowSize < LARGE_SCREEN_SIZE) {
            setCardsNumber({ initialCardNum: MID_SCREEN_CARDS_NUMBER, cardsInRow: TWO_CARD_IN_ROW })
        } else {
            setCardsNumber({ initialCardNum: LARGE_SCREEN_CARDS_NUMBER, cardsInRow: THREE_CARD_IN_ROW })
        }
    }, [windowSize])

    useEffect(() => {
        setIsMoviesToCount(
            isShort
                ? (movies) => filterShortMovies(movies)
                : savedMovies
        )
    }, [isShort, savedMovies])

    return (
        <>
            <section className={'saved'}>
                <SearchForm
                    setIsLoading={setIsLoading}
                    setIsShort={setIsShort}
                    isShort={isShort}
                    setMovies={setSavedMovies}
                    savedMovies={true}
                />
                {isLoading
                    ? <Loader />
                    : <MovieCardList
                        movies={moviesToShow}
                        savedMovies={savedMovies}
                        setMovies={setSavedMovies}
                        isSaved={true}
                    />
                }
                {
                    next.current >= moviesToCount.length
                        ? null
                        : <Preloader onClick={handleShowMoreMovies}/>
                }
            </section>
        </>
    )
}

export default SavedMovies
