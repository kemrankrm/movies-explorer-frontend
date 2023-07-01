import './404.css';
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        // navigate(-1);
    }
    return (
        <section className={'notfound'}>
            <h1 className={'notfound__title'}>
                404
            </h1>
            <p className={'notfound__subtitle'}>
                Страница не найдена
            </p>
            <p className={'notfound__back'} onClick={handleGoBack}>
                Назад
            </p>
        </section>
    )
}

export default NotFound
