import './Register.css'
import classNames from "classnames";
import {Link, useNavigate} from "react-router-dom";
import icon from '../../images/logo.svg'
import auth from "../../utils/auth";
import {useFormWithValidation} from "../../hooks/useForm";

const Register = ({ setLoggedIn}) => {
    const navigate = useNavigate();

    const {values, handleChange, resetFrom, errors, isValid} = useFormWithValidation();

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        resetFrom();
        auth.register(values)
            .then(res => {
                if (res) {
                    auth.login({ email: values.email, password: values.password })
                        .then(res => {
                            console.log(res);
                            const token = res.token;
                            localStorage.setItem('jwt', token);
                            navigate('/movies');
                            setLoggedIn();
                        })
                } else {
                    return Promise.reject(`Что-то пошло не так: ${res}`);
                }
            })
            .catch(e => console.log(e));
    }

    return (
        <section className={'register'}>
            <div className={'register__heading'}>
                <img className={'register__icon'} src={icon} alt={'icon'}/>
                <h1 className={'register__greating'}>Добро пожаловать!</h1>
            </div>
            <form className={'register__form'} onSubmit={handleFormSubmit}>
                <fieldset className={'register__fieldset'}>
                    <label className={'register__form-label'}>
                        <span className={'register__label'}>Имя</span>
                        <input
                            type={'text'}
                            id={'name'}
                            name={'name'}
                            autoComplete={'off'}
                            className={classNames('register__input', 'register__input_name')}
                            onChange={handleChange}
                            required={true}
                            value={values.name || ''}
                        />
                        <span className="form-input__error form-input__error_active">
                        {errors.name || ""}
                        </span>
                    </label>

                    <label className={'register__form-label'}>
                        <span className={'register__label'}>E-mail</span>
                        <input
                            type={'email'}
                            id={'email'}
                            name={'email'}
                            autoComplete='off'
                            className={classNames('register__input', 'register__input_name')}
                            onChange={handleChange}
                            required={true}
                            value={values.email || ''}
                        />
                        <span className="form-input__error form-input__error_active">
                            {errors.email || ""}
                        </span>
                    </label>

                    <label className={'register__form-label'}>
                        <span className={'register__label'}>Пароль</span>
                        <input
                            type={'password'}
                            id={'password'}
                            name={'password'}
                            autoComplete={'off'}
                            className={classNames('register__input', 'register__input_name')}
                            onChange={handleChange}
                            required={true}
                            value={values.password || ''}
                        />
                        <span className="form-input__error form-input__error_active">
                        {errors.password || ""}
                        </span>
                    </label>
                </fieldset>
                <button
                    className={`register__button register__button_${!isValid ? 'disabled' : ''}`}
                    disabled={!isValid}
                    type={'submit'}>Зарегистрироваться
                </button>
            </form>
            <p className={'register__note'}>
                Уже заргеистрированы?
                <Link to={'/signin'} className={'register__link'}>
                     Войти
                </Link>
            </p>
        </section>
    )
}

export default Register
