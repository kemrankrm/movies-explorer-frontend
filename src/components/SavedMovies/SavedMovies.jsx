import './SavedMovies.css'
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const SavedMovies = () => {
    return (
        <>
            <Header isLoggedIn={true}/>
            <section className={'saved'}>
                <SearchForm/>
                <MovieCardList type={'saved'}/>
            </section>
            <Footer/>
        </>
    )
}

export default SavedMovies
