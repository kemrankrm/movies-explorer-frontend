import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import Preloader from "../Preloader/Preloader";
import {useEffect, useRef, useState} from "react";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const next = useRef(3);

    const handleArraySlice = (start, end) => {
        const slicedArray = movies.slice(start, end);
        setMoviesToShow(slicedArray)
    }

    useEffect(() => {
        handleArraySlice(0, 3);
    }, [movies])

    const handleShowMoreMovies = () => {
        next.current = next.current + 3;
        handleArraySlice(0, next.current);
    }

    return (
        <>
            <section className={'movies'}>
                <SearchForm setMovies={setMovies}/>
                <MovieCardList movies={moviesToShow}/>
                <Preloader onClick={handleShowMoreMovies}/>
            </section>
        </>
    )
}

export default Movies
