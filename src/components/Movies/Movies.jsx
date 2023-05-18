import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import Preloader from "../Preloader/Preloader";

const Movies = () => {
    return (
        <>
            <section className={'movies'}>
                <SearchForm/>
                <MovieCardList type={'all'}/>
                <Preloader/>
            </section>
        </>
    )
}

export default Movies
