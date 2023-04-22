import './SearchForm.css'
import {useState} from "react";

const SearchForm = () => {
    const [switchOn, setSwitchOn] = useState(true)

    return (
        <section className={'search-form'}>
            <form className={'search-form__form'}>
                <fieldset className={'search-form__search'}>
                    <input type={'text'} placeholder={'Фильм'} className={'search-form__input'} required={true}/>
                    <button type={"submit"} className={'search-form__button'}></button>
                </fieldset>
                <fieldset className={'search-form__checkbox'}>
                    <label className={'search-form__switch-label'}>
                        <input type={'checkbox'} className={'search-form__switch'} checked={switchOn} onClick={() => setSwitchOn(!switchOn)}/>
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
