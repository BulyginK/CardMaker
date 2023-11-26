import React from 'react';
import css from "./Sidebar.module.css"
import dbSidebarItems from "../../data/SidebarItems";
import ListSidebarItems from "./ListSidebarItems/ListSidebarItems"


function Sidebar() {
    return (
        <div className={css.wrapper}>
            <ListSidebarItems sidebarItems={dbSidebarItems} />
        </div>

    );
}

export default Sidebar