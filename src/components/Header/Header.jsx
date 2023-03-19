import './Header.css';
import logo from '../../images/logo.svg'
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <>
            <section className={'header'}>
                <img className={'header__logo'} alt={'logo'} src={logo}/>
                <nav className={'header__navigation'}>
                    <ul className={'header__navigation-list'}>
                        <li className={'header__navigation-item'}>
                            <Link to={'/movies'} className={'header__navigation-link'}>
                                Фильмы
                            </Link>
                        </li>
                        <li className={'header__navigation-item'}>
                            <Link to={'/saved-movies'} className={'header__navigation-link'}>
                                Сохраненные фильмы
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={'header__button-container'}>
                    <button className={'header__signup'}>
                        Регистрация
                    </button>
                    <button className={'header__signin'}>
                        Войти
                    </button>
                </div>
            </section>
        </>
    )
}

export default Header;
