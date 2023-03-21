import './Header.css';
import logo from '../../images/logo.svg'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Navigation from "../Navigation/Navigation";
import ProfileButton from "../ProfileButton/ProfileButton";

const Header = ({ isLoggedIn }) => {

    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(true)
    const [isDesktop, setIsDesktop] = useState(true)

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

    const handleRoute = () => {
        navigate('/');
    }

    const handleNavigationOpen = () => {
        setIsNavOpen(true)
    }

    const handleNavigationClose = () => {
        setIsNavOpen(false)
    }

    return (
        <>
            <section className={'header'}>
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
                            <Navigation />
                            <ProfileButton />
                        </div>
                    </>
                }
                {
                    isLoggedIn
                        ?
                        (isDesktop && <ProfileButton />)
                        :
                        <div className={'header__button-container'}>
                            <button className={'header__signup'}>
                                Регистрация
                            </button>
                            <button className={'header__signin'}>
                                Войти
                            </button>
                        </div>
                }
            </section>
        </>
    )
}

export default Header;
