import './Login.css'
import classNames from "classnames";
import {Link, useNavigate} from "react-router-dom";
import icon from '../../images/logo.svg'
import auth from "../../utils/auth";
import {useFormWithValidation} from "../../hooks/useForm";

const Login = ({ setLoggedIn, onLogin }) => {
    const {values, handleChange, resetFrom, errors, isValid} = useFormWithValidation();

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        auth.login(values)
            .then(res => {
                if (res.token) {
                    resetFrom()
                    const token = res.token;
                    localStorage.setItem('jwt', token);
                    navigate('/movies');
                    setLoggedIn();
                }
            })
            .catch(e => console.log(e))
    }

    return (
        <section className={'login'}>
            <div className={'login__heading'}>
                <img className={'login__icon'} src={icon} alt={'icon'}/>
                <h1 className={'login__greating'}>Рады видеть!</h1>
            </div>
            <form className={'login__form'} onSubmit={handleFormSubmit}>
                <fieldset className={'login__fieldset'}>
                    <label className={'login__input-label'}>
                        <span className={'login__label'}>E-mail</span>
                        <input
                            type={'email'}
                            id={'email'}
                            name={'email'}
                            autoComplete='off'
                            className={classNames('login__input', 'login__input_name')}
                            onChange={handleChange}
                            value={values.email || ''}
                            required={true}
                        />
                        <span className="form-input__error form-input__error_active">
                            {errors.email || ""}
                        </span>
                    </label>

                    <label className={'login__input-label'}>
                        <span className={'login__label'}>Пароль</span>
                        <input
                            type={'password'}
                            id={'password'}
                            name={'password'}
                            autoComplete={'off'}
                            className={classNames('login__input', 'login__input_name')}
                            onChange={handleChange}
                            value={values.password || ''}
                            required={true}
                        />
                        <span className="form-input__error form-input__error_active">
                            {errors.password || ""}
                        </span>
                    </label>
                </fieldset>
                <button
                    className={`login__button login__button${!isValid ? '_active' : ''}`}
                    type={'submit'}
                    disabled={!isValid}
                >
                    Войти
                </button>
            </form>
            <p className={'login__note'}>
                Ещё не зарегистрированы?
                <Link to={'/signup'} className={'login__link'}>
                    Регистрация
                </Link>
            </p>
        </section>
    )
}

export default Login
