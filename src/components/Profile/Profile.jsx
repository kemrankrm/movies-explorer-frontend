import './Profile.css'
import classNames from "classnames";
import {useContext, useEffect} from "react";
import {userData} from "../../context/context";
import {useFormWithValidation} from "../../hooks/useForm";
import auth from "../../utils/auth";
import {useLocation} from "react-router-dom";
import { EMAIL_PATTERN } from "../../utils/constants";
import {useError} from "../../hooks/useError";

const Profile = ({ onLogout, setUser, setIsInfoSaved, isInfoSaved}) => {

    const {values, setValues, handleChange, errors, isValid} = useFormWithValidation();
    const {error, errorIsOpen, handleErrorClear, handleErrorShowUp} = useError();

    const userInfo = useContext(userData);

    const location = useLocation();
    localStorage.setItem('url', location.pathname);

    const handleInfoSave = () => {
        setIsInfoSaved(true);
    }

    const handleInfoUnsave = () => {
        setIsInfoSaved(false);
    }

    const handleSubmit = () => {
        const token = localStorage.getItem('jwt');
        auth.updateCurrentProfile(values, token)
            .then(res => {
                console.log(res);
                if (res.message) {
                    console.log(res.message);
                    handleErrorShowUp(res);
                    return Promise.reject('ошибка')
                }

                console.log('<KZZ')
                handleInfoSave()
                setUser({ name: res.name, email: res.email });
            })
            .catch(e => console.log(''))
    }

    useEffect(() => {
        setValues(userInfo);
    }, [setValues, userInfo])

    return (
        <>
            <section className={'profile'}>
                <h2 className={'profile__greating'}>
                    Привет, {userInfo.name}
                </h2>
                <form className={'profile__info'}>
                    <div className={'profile__name'}>
                        <p className={'profile__title'}>
                            Имя
                        </p>
                        <label className={'profile__content'}>
                            <input
                                type={'text'}
                                id={'name'}
                                name={'name'}
                                autoComplete={'off'}
                                placeholder={userInfo.name}
                                className={classNames('profile__input', 'profile__input_name')}
                                onChange={(e) => {
                                    handleChange(e);
                                    handleInfoUnsave()
                                    handleErrorClear()
                                }}
                                required={true}
                                value={values.name || ''}
                            />
                            <span className="form-input__error form-input__error_active">
                            {errors.name || ""}
                            </span>
                        </label>
                    </div>
                    <div className={'profile__email'}>
                        <p className={'profile__title'}>
                            E-mail
                        </p>
                        <label className={'profile__content'}>
                            <input
                                type={'email'}
                                id={'email'}
                                name={'email'}
                                pattern={EMAIL_PATTERN}
                                autoComplete={'off'}
                                placeholder={userInfo.email}
                                className={classNames('profile__input', 'profile__input_name')}
                                onChange={(e) => {
                                    handleChange(e);
                                    handleInfoUnsave();
                                    handleErrorClear();
                                }}
                                required={true}
                                value={values.email || ''}
                            />
                            <span className="form-input__error form-input__error_active">
                            {errors.name || ""}
                            </span>
                        </label>
                    </div>
                </form>
                <div className={'profile__button-container'}>
                    <button
                        className={`profile__button profile__button_edit ${isValid ? '' : 'profile__button_disabled'}`}
                        onClick={handleSubmit}
                        disabled={userInfo.name === values.name && userInfo.email === values.email}
                    >
                        {isInfoSaved ? 'Сохранено' : 'Редактировать'}
                    </button>
                    <button
                        className={classNames('profile__button', 'profile__button_logout')}
                        onClick={onLogout}
                    >
                        Выйти из аккаунта
                    </button>
                    {
                        errorIsOpen
                            ? <div className={'profile__error'}>
                                <p className={'profile__error-message'}>{`${error.message} : ${error.validation.body.keys[0]}`}</p>
                            </div>
                            : null
                    }
                </div>
            </section>
        </>
    )
}

export default Profile

