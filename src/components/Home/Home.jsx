import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Student from "../Student/Student";
import {Route} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <Student/>
        </>
    )
}
