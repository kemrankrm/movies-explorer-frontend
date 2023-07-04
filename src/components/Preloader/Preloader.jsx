import './Preloader.css'

const Preloader = ({ onClick, empty }) => {
    return (
        <section className={'preloader'}>
            {!empty
                ? <button className={'preloader__button'} onClick={onClick}>
                    Еще
                </button>
                : <p className={'preloader__empty'}>
                    Пусто
                </p>
            }
        </section>
    )
}

export default Preloader
