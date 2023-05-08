import './Profile.css'
import classNames from "classnames";
import Header from "../Header/Header";

const Profile = () => {
    return (
        <>
        {/*<Header isLoggedIn={true}/>*/}
        <section className={'profile'}>
            <h2 className={'profile__greating'}>
                Привет, Кемран!
            </h2>
            <div className={'profile__info'}>
                <div className={'profile__name'}>
                    <p className={'profile__title'}>
                        Имя
                    </p>
                    <p className={'profile__content'}>
                        Кемран
                    </p>
                </div>
                <div className={'profile__email'}>
                    <p className={'profile__title'}>
                        E-mail
                    </p>
                    <p className={'profile__content'}>
                        kemran.karimov@gmail.com
                    </p>
                </div>
            </div>
            <div className={'profile__button-container'}>
                <button className={classNames('profile__button', 'profile__button_edit')}>
                    Редактировать
                </button>
                <button className={classNames('profile__button', 'profile__button_logout')}>
                    Выйти из аккаунта
                </button>
            </div>
        </section>
        </>
    )
}

export default Profile
