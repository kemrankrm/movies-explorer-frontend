import './SavedMovies.css'
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const SavedMovies = ({ windowSize, savedMovies, setSavedMovies }) => {
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
        const slicedArray = savedMovies.slice(start, end);
        setMoviesToShow(slicedArray)
    }

    const handleShowMoreMovies = () => {
        next.current = next.current + cardsNumber.cardsInRow;
        handleArraySlice(0, next.current);
    }

    useEffect(() => {
        handleArraySlice(0, cardsNumber.initialCardNum);
    }, [savedMovies])

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
                <SearchForm setMovies={setSavedMovies} savedMovies={true}/>
                <MovieCardList
                    movies={moviesToShow}
                    savedMovies={savedMovies}
                    setMovies={setSavedMovies}
                    isSaved={true}
                />
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
