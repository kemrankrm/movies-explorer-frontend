import './Preloader.css'

const Preloader = ({ onClick }) => {
    return (
        <section className={'preloader'}>
            <button className={'preloader__button'} onClick={onClick}>
                Еще
            </button>
        </section>
    )
}

export default Preloader
