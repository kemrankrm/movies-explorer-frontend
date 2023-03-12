import './AboutProject.css'
import classNames from "classnames";

const AboutProject = () => {
    return (
        <div className={'about'}>
            <h2 className={'about__title'}>
                О проекте
            </h2>
            <div className={'about__content'}>
                <div className={'about__text'}>
                    <h3 className={'about__subtitle'}>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className={'about__description'}>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className={'about__text'}>
                    <h3 className={'about__subtitle'}>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className={'about__description'}>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className={'about__timeline'}>
                <div className={'about__backend'}>
                    <p className={classNames('about__period', 'about__period_black')}>1 неделя</p>
                    <p className={classNames('about__cite', 'about__cite_black')}>Back-end</p>
                </div>
                <div className={'about__frontend'}>
                    <p className={'about__period'}>4 недели</p>
                    <p className={'about__cite'}>Front-end</p>
                </div>
            </div>
        </div>
    )
}

export default AboutProject
