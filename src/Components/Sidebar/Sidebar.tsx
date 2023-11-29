import React, {useState} from 'react';
import css from "./Sidebar.module.css"
import SidebarItems from "../../data/SidebarItems";
//import ListSidebarItems from "./ListSidebarItems/ListSidebarItems"
import SidebarItemOption from "./SidebarItemOption/SidebarItemOption";
//import {SidebarItem} from "../../type/type";

let clickElem: string = '';
const Sidebar = () => {
    const [isShown, setIsShown] = useState(false);

    const getItemAlt = (e: any) => {
        e.preventDefault()
        setIsShown(!isShown)
        clickElem = e.target.alt;
    };

    let sidebarItems = SidebarItems.map(item => (
        <li key={item.id} className={css.item} onClick={getItemAlt}>
            <img className={css.img} src={item.img} alt={item.name} />
            <p className={css.name}>{item.name}</p>
        </li>))

    return (
        <div className={css.sidebar}>
            <div className={css.wrapper}>
                <ul className={css.wrapper_items}>
                    {sidebarItems}
                </ul>
            </div>
            {isShown &&
                <SidebarItemOption
                    isShown={isShown}
                    item={clickElem}/>}
        </div>

    );
}

export default Sidebar