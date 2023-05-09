import './SavedMovies.css'
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = () => {
    return (
        <>
            <section className={'saved'}>
                <SearchForm/>
                <MovieCardList type={'saved'}/>
            </section>
        </>
    )
}

export default SavedMovies
