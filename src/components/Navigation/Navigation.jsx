import './Navigation.css'
import {NavLink, useNavigate} from "react-router-dom";
import classNames from "classnames";

const Navigation = ({ onClose, isDesktop }) => {
    const navigate = useNavigate()
    const handleTabClick = () => {
        if (!isDesktop) {
            onClose();
        }
    }

    return (
        <nav className={'navigation'}>
            <NavLink
                   to={'/'}
                   className={({isActive}) => `${isActive ? 'navigation__item_active navigation__item_home' : classNames('navigation__item', 'navigation__item_home')}`}
                   onClick={handleTabClick}
            >
                Главная
            </NavLink>
            <NavLink
                to={'/movies'}
                className={({isActive}) => `${ isActive ? 'navigation__item_active' : 'navigation__item'}`}
                onClick={e => {
                    e.preventDefault()
                    navigate('/movies');
                    handleTabClick()
                }}
            >
                Фильмы
            </NavLink>
            <NavLink
                to={'/saved-movies'}
                className={({isActive}) => `${ isActive ? 'navigation__item_active' : 'navigation__item'}`}
                onClick={e => {
                    e.preventDefault()
                    navigate('/saved-movies');
                    handleTabClick()
                }}
            >
                Сохраненные фильмы
            </NavLink>
        </nav>
    )
}

export default Navigation
