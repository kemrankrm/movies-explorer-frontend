import './SavedMovies.css'
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { handleArraySlice } from '../../utils/utils';
import Loader from '../Loader/Loader';

const SavedMovies = ({ windowSize, savedMovies, setSavedMovies }) => {
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [cardsNumber, setCardsNumber] = useState({ initialCardNum: 12, cardsInRow: 3 })
    const [isLoading, setIsLoading] = useState(false);
    const [isShort, setIsShort] = useState(false);

    console.log(savedMovies);

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

    const handleShowMoreMovies = () => {
        next.current = next.current + cardsNumber.cardsInRow;
        handleArraySlice(0, next.current, savedMovies, setMoviesToShow, isShort);
    }

    useEffect(() => {
        handleArraySlice(0, cardsNumber.initialCardNum, savedMovies, setMoviesToShow, isShort);
    }, [savedMovies, isShort, cardsNumber])

    useEffect(() => {
        if (windowSize < 768) {
            setCardsNumber({ initialCardNum: 5, cardsInRow: 1 })
        } else if (windowSize < 1280) {
            setCardsNumber({ initialCardNum: 8, cardsInRow: 2 })
        } else {
            setCardsNumber({ initialCardNum: 12, cardsInRow: 3 })
        }
    }, [windowSize])

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
                    next.current >= savedMovies.length
                        ? null
                        : <Preloader onClick={handleShowMoreMovies}/>
                }
            </section>
        </>
    )
}

export default SavedMovies
