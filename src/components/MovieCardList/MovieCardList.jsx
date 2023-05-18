import './MovieCardList.css'
import {moviesList} from "../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ type }) => {
    return (
        <section className={'movies-list'}>
            <div className={'movies-list__container'}>
                { moviesList.map( (item, index) => {
                    if (type === 'saved' && item.saved) {
                        return (
                            <MoviesCard
                                title={item.title}
                                duration={item.duration}
                                saved={item.saved}
                                image={item.image}
                                key={index}
                            />
                        )
                    }
                    else if (type === 'all') {
                        return (
                            <MoviesCard
                                title={item.title}
                                duration={item.duration}
                                saved={item.saved}
                                image={item.image}
                                key={index}
                            />
                        )
                    }
                }) }
            </div>
        </section>
    )
}

export default MoviesCardList
