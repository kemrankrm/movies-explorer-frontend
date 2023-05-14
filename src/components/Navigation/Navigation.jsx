import './Navigation.css'
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const Navigation = ({ onClose }) => {
    const handleTabClick = () => {
        onClose();
    }

    return (
        <nav className={'navigation'}>
            <NavLink
                   to={'/'}
                   className={({isActive}) => `${isActive ? 'navigation__item_active' : classNames('navigation__item', 'navigation__item_home')}`}
                   onClick={handleTabClick}
            >
                Главная
            </NavLink>
            <NavLink
                to={'/movies'}
                className={({isActive}) => `${ isActive ? 'navigation__item_active' : 'navigation__item'}`}
                onClick={handleTabClick}
            >
                Фильмы
            </NavLink>
            <NavLink
                to={'/saved-movies'}
                className={({isActive}) => `${ isActive ? 'navigation__item_active' : 'navigation__item'}`}
                onClick={handleTabClick}
            >
                Сохраненные фильмы
            </NavLink>
        </nav>
    )
}

export default Navigation
