import './Main.css';
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Student from "../Student/Student";

const Main = () => {
    return (
        <section className={'main'}>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <Student/>
        </section>
    )
}

export default Main
