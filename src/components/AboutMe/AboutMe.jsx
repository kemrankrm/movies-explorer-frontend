import './AboutMe.css'
import avatar from '../../images/avatar.png'

const AboutMe = () => {
    return (
        <section className={'profile'}>
            <div className={'profile__content'}>
                <h2 className={'profile__name'}>
                    Кемран
                </h2>
                <h3 className={'profile__about'}>
                    Веб-разработчик, 26 лет
                </h3>
                <p className={'profile__description'}>
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015
                    года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                    начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>
                <p className={'profile__cite'}>GitHub</p>
            </div>
            <div className={'profile__image-container'}>
                <img className={'profile__avatar'} src={avatar} alt={'avatar'}/>
            </div>
        </section>
    )
}

export default AboutMe;
