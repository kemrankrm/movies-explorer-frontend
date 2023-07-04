import './MoviesCard.css'

const MoviesCard = ({ title, duration, saved, image, onSave, onRemove, id }) => {

    return (
        <div className={'card'} id={id}>
            <div className={'card__header'}>
                <p className={'card__title'}>{title}</p>
                <p className={'card__duration'}>{duration} минут</p>
            </div>
            <div className={'card__image-container'}>
                <img
                    className={'card__image'}
                    alt={'movie cover'}
                    src={image}
                />
            </div>
            <div className={'card__button-container'}>
                <button
                    className={`card__button ${saved ? 'card__button_saved' : ''}`}
                    type={'submit'}

                    id={id}
                    onClick={(e) => {
                        saved ? onRemove(e) : onSave(e)
                    }}
                >
                    {saved ? '' : 'Сохранить'}
                </button>
            </div>
        </div>
    )
}

export default MoviesCard
