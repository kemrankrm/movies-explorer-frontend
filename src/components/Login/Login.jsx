import './Login.css'
import classNames from "classnames";
import {Link} from "react-router-dom";
import icon from '../../images/logo.svg'

const Login = () => {
    return (
        <section className={'login'}>
            <div className={'login__heading'}>
                <img className={'login__icon'} src={icon} alt={'icon'}/>
                <h1 className={'login__greating'}>Рады видеть!</h1>
            </div>
            <form className={'login__form'}>
                <fieldset className={'login__fieldset'}>
                    <label className={'login__label'}>E-mail</label>
                    <input
                        type={'email'}
                        id={'email'}
                        name={'email'}
                        autoComplete='off'
                        className={classNames('login__input', 'login__input_name')}
                    />
                    <label className={'login__label'}>Пароль</label>
                    <input
                        type={'password'}
                        id={'password'}
                        name={'password'}
                        autoComplete={'off'}
                        className={classNames('login__input', 'login__input_name')}
                    />
                </fieldset>
                <button className={'login__button'} type={'submit'}>Зарегистрироваться</button>
            </form>
            <p className={'login__note'}>
                Уже заргеистрированы?
                <Link to={'/signup'} className={'login__link'}>
                    Войти
                </Link>
            </p>
        </section>
    )
}

export default Login
