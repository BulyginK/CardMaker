import React, {useState} from 'react';
import css from "./Sidebar.module.css"
import dbSidebarItems from "../../data/SidebarItems";
import ListSidebarItems from "./ListSidebarItems/ListSidebarItems"
import SidebarItemOption from "../SidebarItemOption/SidebarItemOption";
import {SidebarItem} from "../../type/type";

const Sidebar = () => {
    const [isShown, setIsShown] = useState(false);

    let itemAlt = (e: any) => {
        e.preventDefault()
        setIsShown(!isShown);
        return e.target.alt
    };

    return (
        <div className={css.wrapper}>
            <ListSidebarItems
                sidebarItems={dbSidebarItems}
                itemAlt={itemAlt}  />
            {isShown &&
                <SidebarItemOption
                itemAl={itemAlt}
                toggleFIeldset={isShown} />}

        </div>
    );
}

export default Sidebar