import './Register.css'
import classNames from "classnames";
import {Link} from "react-router-dom";
import icon from '../../images/logo.svg'

const Register = () => {
    return (
        <section className={'register'}>
            <div className={'register__heading'}>
                <img className={'register__icon'} src={icon} alt={'icon'}/>
                <h1 className={'register__greating'}>Добро пожаловать!</h1>
            </div>
            <form className={'register__form'}>
                <fieldset className={'register__fieldset'}>
                    <label className={'register__label'}>Имя</label>
                    <input
                        type={'text'}
                        id={'name'}
                        name={'name'}
                        autoComplete={'off'}
                        className={classNames('register__input', 'register__input_name')}
                    />
                    <label className={'register__label'}>E-mail</label>
                    <input
                        type={'email'}
                        id={'email'}
                        name={'email'}
                        autoComplete='off'
                        className={classNames('register__input', 'register__input_name')}
                    />
                    <label className={'register__label'}>Пароль</label>
                    <input
                        type={'password'}
                        id={'password'}
                        name={'password'}
                        autoComplete={'off'}
                        className={classNames('register__input', 'register__input_name')}
                    />
                </fieldset>
                <button className={'register__button'} type={'submit'}>Зарегистрироваться</button>
            </form>
            <p className={'register__note'}>
                Уже заргеистрированы?
                <Link to={'/login'} className={'register__link'}>
                     Войти
                </Link>
            </p>
        </section>
    )
}

export default Register
