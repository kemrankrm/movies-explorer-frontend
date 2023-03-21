import './Navigation.css'
import {Link, NavLink} from "react-router-dom";
import classNames from "classnames";

const Navigation = () => {
    return (
        <nav className={'navigation'}>
            <NavLink
                   exact to={'/'}
                   className={({isActive}) => `${isActive ? 'navigation__item_active' : classNames('navigation__item', 'navigation__item_home')}`}
            >
                Главная
            </NavLink>
            <NavLink
                to={'/movies'}
                className={({isActive}) => `${ isActive ? 'navigation__item_active' : 'navigation__item'}`}
            >
                Фильмы
            </NavLink>
            <NavLink
                to={'/saved-movies'}
                className={({isActive}) => `${ isActive ? 'navigation__item_active' : 'navigation__item'}`}
            >
                Сохраненные фильмы
            </NavLink>
        </nav>
    )
}

export default Navigation
