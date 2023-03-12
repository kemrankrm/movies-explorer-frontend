import './Techs.css'
import {techList} from "../../utils/constants";

const Techs = () => {
    return (
        <div className={'techs'}>
            <h2 className={'section__heading'}>
                Технологии
            </h2>
            <h3 className={'techs__title'}>
                7 технологий
            </h3>
            <h4 className={'techs__subtitle'}>
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </h4>
            <ul className={'techs__list'}>
                { techList.map( item => {
                    return (
                        <li className={'techs__tech'} key={item.id}>
                            {item.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Techs;
