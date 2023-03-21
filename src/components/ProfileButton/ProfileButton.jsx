import './ProfileButton.css'
import profileIcon from "../../images/profileIconSvg.svg";
import {useNavigate} from "react-router-dom";

const ProfileButton = () => {
    const navigate = useNavigate()

    const handleRoute = () => {
        navigate('/profile')
    }

    return (
        <button
            className={'profile-button'}
            onClick={handleRoute}
            id={'profile'}
        >
            <img
                className={'profile-button__icon'}
                src={profileIcon}
                alt={'profile icon'}
            />
            Аккаунт
        </button>
    )
}

export default ProfileButton
