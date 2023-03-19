import './MoviesCard.css'
import classNames from "classnames";
import {useState} from "react";
import {useLocation} from "react-router-dom";

const MoviesCard = ({ title, duration, saved }) => {

    const location = useLocation();
    const [isSaved, setIsSaved] = useState(false);

    useState(() => {
        if (location.pathname === '/saved-movies') {
            setIsSaved(true)
        } else {
            setIsSaved(false)
        }
    }, [location])
    console.log('location,', location)


    return (
        <div className={'card'}>
            <div className={'card__header'}>
                <p className={'card__title'}>{title}</p>
                <p className={'card__duration'}>{duration} минут</p>
            </div>
            <div className={'card__image-container'}>

            </div>
            <div className={'card__button-container'}>
                { isSaved
                    ? <button
                        className={classNames('card__button', 'card__button_delete')}>
                      </button>
                    : <button
                        type={'submit'}
                        className={classNames('card__button',
                        saved ? 'card__button_saved' : 'card__button_unsaved')}>
                        {saved ? '' : 'Сохранить'}
                      </button>}
            </div>
        </div>
    )
}

export default MoviesCard
