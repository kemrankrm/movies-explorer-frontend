import './SearchForm.css';
import { useEffect, useState } from "react";
import {api, handleSearch, mainApi} from "../../utils/utils";

const SearchForm = ({ setMovies, savedMovies }) => {
    const [movieSearchInput, setMovieSearchInput] = useState({ keyword: '', checkbox: null });

    const handleMovieNameInput = (e) => {
        setMovieSearchInput({ ...movieSearchInput, keyword: e.target.value });
    }

    const handleCheckBoxClick = () => {
        setMovieSearchInput({ ...movieSearchInput, checkbox: !movieSearchInput.checkbox })
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('searchInput', JSON.stringify(movieSearchInput));

        if (savedMovies) {
            const token = localStorage.getItem('jwt');
            mainApi.getMovies(token)
                .then(res => {
                    const filteredMoviesList = handleSearch(movieSearchInput.keyword, movieSearchInput.checkbox, res)

                    localStorage.setItem('foundSavedMovies', JSON.stringify(filteredMoviesList));
                    setMovies(filteredMoviesList);
                });
        } else {
            api.getMovies()
                .then(res => {
                    const filteredMoviesList = handleSearch(movieSearchInput.keyword, movieSearchInput.checkbox, res)

                    localStorage.setItem('foundMovies', JSON.stringify(filteredMoviesList));
                    setMovies(filteredMoviesList);
                });
        }
    };

    useEffect(() => {
        setMovieSearchInput(JSON.parse(localStorage.getItem('searchInput')));
    }, []);

    return (
        <section className={'search-form'}>
            <form className={'search-form__form'} onSubmit={handleSearchSubmit}>
                <fieldset className={'search-form__search'}>
                    <input
                        type={'text'}
                        placeholder={'Фильм'}
                        className={'search-form__input'}
                        onChange={handleMovieNameInput}
                        value={movieSearchInput.keyword || ''}
                    />
                    <button type={"submit"} className={'search-form__button'}></button>
                </fieldset>
                <fieldset className={'search-form__checkbox'}>
                    <label className={'search-form__switch-label'}>
                        <input
                            type={'checkbox'}
                            className={'search-form__switch'}
                            onClick={handleCheckBoxClick}
                            defaultChecked={movieSearchInput.checkbox}
                        />
                        <span className={'search-form__pseudo'}></span>
                        <span className={'search-form__label-text'}>
              Короткометражки
            </span>
                    </label>
                </fieldset>
            </form>
        </section>
    )
}

export default SearchForm;
