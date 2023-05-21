import './MovieCardList.css'
import {baseUrl, moviesList} from "../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import {api} from "../../utils/utils";
import {useState} from "react";

const MoviesCardList = ({ movies }) => {
    console.log('MOVIES ARR LENGTH', movies);

    return (
        <section className={'movies-list'}>
            <div className={'movies-list__container'}>
                {
                    movies && movies.map(movie => {
                        return (
                            <MoviesCard
                                title={movie.nameRU}
                                duration={movie.duration}
                                image={baseUrl + movie.image.url}
                                key={movie.id}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MoviesCardList
