import './Header.css';
import logo from '../../images/logo.svg'
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Navigation from "../Navigation/Navigation";
import ProfileButton from "../ProfileButton/ProfileButton";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation().pathname;
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        switch (location) {
            case '/':
                setIsLoggedIn(false);
                break;

            case '/movies':
                setIsLoggedIn(true);
                break;

            case '/saved-movies':
                setIsLoggedIn(true);
                break;

            case '/profile':
                setIsLoggedIn(true);
                break;

            default:
                setIsLoggedIn(true);
        }
    }, [location]);

    const handleScreenResize = () => {
        if (window.innerWidth > 1279) {
            setIsDesktop(true)
        } else {
            setIsDesktop(false)
        }
    }

    useEffect(() => {
        handleScreenResize();
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleScreenResize)
    })

    const handleRoute = (e) => {
        const id = e.target.id;

        switch (id) {
            case 'main':
                navigate('/');
                break;

            case 'signup':
                navigate('/signup');
                break

            case 'signin':
                navigate('/signin')
                break

            default:
                return;
        }
    }

    const handleNavigationOpen = () => {
        setIsNavOpen(true)
    }

    const handleNavigationClose = () => {
        setIsNavOpen(false)
    }

    return (
        <>
            <header className={'header'}>
                <img className={'header__logo'} alt={'logo'} id={'main'} src={logo} onClick={handleRoute}/>
                { isLoggedIn && isDesktop && <Navigation /> }
                { isLoggedIn &&
                    <button className={'header__nav-button'} onClick={handleNavigationOpen}></button>
                }
                {isNavOpen && isLoggedIn && !isDesktop &&
                    <>
                        <div className={'header__overlay'} onClick={handleNavigationClose}></div>
                        <div className={'header__side-menu'}>
                            <button className={'header__close-button'} onClick={handleNavigationClose}></button>
                            <Navigation onClose={handleNavigationClose}/>
                            <ProfileButton onClose={handleNavigationClose}/>
                        </div>
                    </>
                }
                {
                    isLoggedIn
                        ?
                        (isDesktop && <ProfileButton />)
                        :
                        <div className={'header__button-container'}>
                            <button
                                className={'header__signup'}
                                onClick={handleRoute}
                                id={'signup'}
                            >
                                Регистрация
                            </button>
                            <button
                                className={'header__signin'}
                                onClick={handleRoute}
                                id={'signin'}
                            >
                                Войти
                            </button>
                        </div>
                }
            </header>
        </>
    )
}

export default Header;
