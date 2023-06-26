import './Header.css';
import logo from '../../images/logo.svg'
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import Navigation from "../Navigation/Navigation";
import ProfileButton from "../ProfileButton/ProfileButton";

const Header = ({ isLoggedIn }) => {

    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)

    const handleScreenResize = () => {
        if (window.innerWidth > 768) {
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
        return(() => window.removeEventListener('resize', handleScreenResize))
    },[])

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
                { isLoggedIn && isDesktop && <Navigation isDesktop={isDesktop}/> }
                { isLoggedIn &&
                    <button className={'header__nav-button'} onClick={handleNavigationOpen}></button>
                }
                {isNavOpen && isLoggedIn && !isDesktop &&
                    <>
                        <div className={'header__overlay'} onClick={handleNavigationClose}></div>
                        <div className={'header__side-menu'}>
                            <button className={'header__close-button'} onClick={handleNavigationClose}></button>
                            <Navigation
                                onClose={handleNavigationClose}
                            />
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
