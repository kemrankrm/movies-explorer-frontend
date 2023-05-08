import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Movies = () => {
    return (
        <>
            {/*<Header isLoggedIn={true}/>*/}
            <section className={'movies'}>
                <SearchForm/>
                <MovieCardList type={'all'}/>
                <Preloader/>
            </section>
            <Footer/>
        </>
    )
}

export default Movies
