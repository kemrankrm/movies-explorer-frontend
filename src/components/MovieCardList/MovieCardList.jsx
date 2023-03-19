import './MovieCardList.css'
import {moviesList} from "../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
    return (
        <section className={'movies-list'}>
            <div className={'movies-list__container'}>
                { moviesList.map( (item, index) => {
                    return (
                        <MoviesCard
                            title={item.title}
                            duration={item.duration}
                            saved={item.saved}
                            key={index}
                        />
                    )
                }) }
            </div>
        </section>
    )
}

export default MoviesCardList
