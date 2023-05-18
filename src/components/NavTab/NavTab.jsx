import './NavTab.css';
import { navTabLinks } from "../../utils/constants";

const NavTab = () => {
    return (
        <ul className={'navtab'}>
            { navTabLinks.map( item => {
                return (
                    <li className={'navtab__link'} key={item.id}>
                        {item.title}
                    </li>
                )
            }) }
        </ul>
    )
}

export default NavTab;
