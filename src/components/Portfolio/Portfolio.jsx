import './Portfolio.css'
import {portfolioList} from "../../utils/constants";
import arrow from '../../images/arrow-left-up-portfolio.svg';

const Portfolio = () => {
    return (
        <section className={'portfolio'}>
            <h2 className={'portfolio__heading'}>Портфолио</h2>
            <ul className={'portfolio__list'}>
                { portfolioList.map(item => {
                    return (
                        <li className={'portfolio__item'} key={item.id}>
                            {item.title}
                            <img className={'portfolio__arrow'} src={arrow} alt={'arrow'}/>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Portfolio
