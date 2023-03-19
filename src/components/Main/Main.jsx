import './Main.css';
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Student from "../Student/Student";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
    return (
        <>
            <Header isLoggedIn={true}/>
            <section className={'main'}>
                <Promo/>
                <AboutProject/>
                <Techs/>
                <Student/>
            </section>
            <Footer/>
        </>
    )
}

export default Main
