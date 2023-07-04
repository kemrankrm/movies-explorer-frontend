import './Register.css'
import classNames from "classnames";
import {Link, useNavigate} from "react-router-dom";
import icon from '../../images/logo.svg'
import auth from "../../utils/auth";
import {useFormWithValidation} from "../../hooks/useForm";
import {useError} from "../../hooks/useError";
import {EMAIL_PATTERN} from "../../utils/constants";

const Register = ({ setLoggedIn }) => {

    const navigate = useNavigate();
    const {values, handleChange, resetFrom, errors, isValid} = useFormWithValidation();
    const {error, errorIsOpen, handleErrorClear, handleErrorShowUp} = useError();

    const handleFormSubmit = (e) => {
        e.preventDefault()
        resetFrom();
        auth.register(values)
            .then(res => {
                if (res.message) {
                    handleErrorShowUp(res)
                    return Promise.reject('ошибка')
                }
                if (res) {
                    auth.login({ email: values.email, password: values.password })
                        .then(res => {
                            const token = res.token;
                            localStorage.setItem('jwt', token);
                            navigate('/movies');
                            console.log('AUTH AUTH', res)
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
                            onChange={(e) => {
                                handleChange(e)
                                handleErrorClear();
                            }}
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
                            pattern={EMAIL_PATTERN}
                            autoComplete='off'
                            className={classNames('register__input', 'register__input_name')}
                            onChange={(e) => {
                                handleChange(e)
                                handleErrorClear();
                            }}
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
                            onChange={(e) => {
                                handleChange(e)
                                handleErrorClear();
                            }}
                            required={true}
                            value={values.password || ''}
                        />
                        <span className="form-input__error form-input__error_active">
                        {errors.password || ""}
                        </span>
                    </label>
                </fieldset>
                <button
                    className={`
                    register__button 
                    register__button_${!isValid ? 'disabled' : ''}
                    ${errorIsOpen ? 'register__button_error' : ''}
                    `}
                    disabled={!isValid}
                    type={'submit'}>
                    {errorIsOpen ? error?.message : 'Зарегистрироваться'}
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
