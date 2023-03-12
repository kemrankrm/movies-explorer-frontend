import './Header.css';
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <>
            <div className={'header'}>
                <img className={'header__logo'} alt={'logo'} src={logo}/>
                <div className={'header__button-container'}>
                    <button className={'header__signup'}>
                        Регистрация
                    </button>
                    <button className={'header__signin'}>
                        Войти
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;
