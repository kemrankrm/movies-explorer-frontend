import './Loader.css'
import icon from '../../images/loading_icon.png'

const Loader = () => {
    return (
        <div className={'loader'}>
            <h1 className={'loader__text'}>
                Loading...
            </h1>
            <img
                className={'loader__icon'}
                src={icon}
                alt={'loader image'}
            />
        </div>
        )

}

export default Loader
