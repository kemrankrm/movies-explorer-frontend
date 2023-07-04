import './Student.css'
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

const Student = () => {
    return (
        <section className={'student'} id={'student'}>
            <h2 className={'section__heading'}>
                Студент
            </h2>
            <AboutMe/>
            <Portfolio/>
        </section>
    )
}

export default Student
