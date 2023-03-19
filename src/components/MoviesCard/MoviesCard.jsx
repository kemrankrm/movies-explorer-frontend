import './MoviesCard.css'
import classNames from "classnames";

const MoviesCard = ({ title, duration, saved }) => {
    return (
        <div className={'card'}>
            <div className={'card__header'}>
                <p className={'card__title'}>{title}</p>
                <p className={'card__duration'}>{duration} минут</p>
            </div>
            <div className={'card__image-container'}>

            </div>
            <div className={'card__button-container'}>
                <button type={'submit'} className={classNames('card__button',
                    saved ? 'card__button_saved' : 'card__button_unsaved')}>
                    {saved ? '' : 'Сохранить'}
                </button>
            </div>
        </div>
    )
}

export default MoviesCard
