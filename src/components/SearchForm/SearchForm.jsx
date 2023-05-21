import './SearchForm.css'
import {useState} from "react";
import { api } from "../../utils/utils";

const SearchForm = ({ setMovies }) => {
    const [switchOn, setSwitchOn] = useState(true)
    const [movieNameInput, setMovieNameInput] = useState('');

    const handleMovieNameInput = (e) => {
        setMovieNameInput(e.target.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        let moviesList;
        api.getMovies()
            .then(res => {
                moviesList = res;
                setMovies(moviesList);
            })
    }

    return (
        <section className={'search-form'}>
            <form className={'search-form__form'} onSubmit={handleSearchSubmit}>
                <fieldset className={'search-form__search'}>
                    <input
                        type={'text'}
                        placeholder={'Фильм'}
                        className={'search-form__input'}
                        required={true}
                        onChange={handleMovieNameInput}
                        value={movieNameInput}
                    />
                    <button type={"submit"} className={'search-form__button'}></button>
                </fieldset>
                <fieldset className={'search-form__checkbox'}>
                    <label className={'search-form__switch-label'}>
                        <input
                            type={'checkbox'}
                            className={'search-form__switch'}
                            onClick={() => setSwitchOn(!switchOn)}
                            defaultChecked={switchOn}
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

export default SearchForm
