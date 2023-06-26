import './NavTab.css';
import { navTabLinks } from "../../utils/constants";

const NavTab = () => {
    return (
        <ul className={'navtab'}>
            { navTabLinks.map( item => {
                return (
                    <li className={'navtab__element'} key={item.id}>
                        <a className={'navtab__link'} href={`#${item.id}`}>
                            {item.title}
                        </a>
                    </li>
                )
            }) }
        </ul>
    )
}

export default NavTab;
