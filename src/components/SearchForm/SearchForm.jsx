import './SearchForm.css';
import { useEffect, useState } from "react";
import { api, handleSearch, mainApi } from "../../utils/utils";

const SearchForm = ({ setMovies, savedMovies, isShort, setIsShort }) => {
    const [movieSearchInput, setMovieSearchInput] = useState({ keyword: '', checkbox: isShort });

    const handleMovieNameInput = (e) => {
        setMovieSearchInput({ ...movieSearchInput, keyword: e.target.value });
    }

    const handleCheckBoxClick = () => {
        setIsShort((prevIsShort) => !prevIsShort);
        setMovieSearchInput({ ...movieSearchInput, checkbox: !isShort })
    }

    const handleMoviesResponse = (response, name) => {
        const filteredMoviesList = handleSearch(movieSearchInput.keyword, movieSearchInput.checkbox, response)

        localStorage.setItem(name, JSON.stringify(filteredMoviesList));
        setMovies(filteredMoviesList);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('searchInput', JSON.stringify(movieSearchInput));

        if (savedMovies) {
            const token = localStorage.getItem('jwt');

            mainApi.getMovies(token).then(res => handleMoviesResponse(res, 'foundSavedMovies'));
        } else {
            api.getMovies().then(res => handleMoviesResponse(res, 'foundMovies'));
        }
    };

    useEffect(() => {
        const storedSearchData = JSON.parse(localStorage.getItem('searchInput'));

        storedSearchData && setMovieSearchInput(
            JSON.parse(localStorage.getItem('searchInput'))
        );
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
                    <button type={"submit"} className={'search-form__button'} />
                </fieldset>
                <fieldset className={'search-form__checkbox'}>
                    <label className={'search-form__switch-label'}>
                        <input
                            type={'checkbox'}
                            className={'search-form__switch'}
                            onClick={handleCheckBoxClick}
                            defaultChecked={isShort}
                        />
                        <span className={'search-form__pseudo'} />
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
