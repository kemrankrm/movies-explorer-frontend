import './Header.css';
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <>
            <section className={'header'}>
                <img className={'header__logo'} alt={'logo'} src={logo}/>
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
