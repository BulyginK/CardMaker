import React, {useState} from 'react';
import css from "./Sidebar.module.css"
import SidebarItems from "../../data/SidebarItems";
//import ListSidebarItems from "./ListSidebarItems/ListSidebarItems"
import SidebarItemOption from "./SidebarItemOption/SidebarItemOption";
//import {SidebarItem} from "../../type/type";

type SidebarItemsProps = {
    canvasHandler: () => void;
};
const Sidebar = ({canvasHandler}: SidebarItemsProps) => {
    const [isShown, setIsShown] = useState(false);
    const [clickElem, setClickElem] = useState('');

    const getItemAlt = (e: any) => {
        e.preventDefault();
        e.target.alt != clickElem ? setIsShown(true) : setIsShown(!isShown);
        setClickElem(e.target.alt)
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
                    item={clickElem}
                    canvasHandler={canvasHandler}
                />}
        </div>

    );
}

export default Sidebar