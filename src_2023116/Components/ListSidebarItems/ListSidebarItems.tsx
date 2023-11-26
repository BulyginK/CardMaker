import { useState } from "react";
import { SidebarItems } from "../../type/type";
import css from "./ListSidebarItems.module.css";
import SidebarItemOption from "../SidebarItemOption/SidebarItemOption"

const ListSidebarItems = ({ sidebarItems }: SidebarItems) => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);
      };
    
    return (
        <ul className={css.listwWrapper}>
            {sidebarItems.map(item => (
                <li key={item.id} className={css.listwWrapper_item} onClick={handleClick}>
                        <img className={css.img} src={item.img} alt={item.name} />
                        <p className={css.name}>{item.name}</p>
                </li>
            ))}

            {isShown && <SidebarItemOption />}
        </ul>
    );
}

export default ListSidebarItems