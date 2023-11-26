import Popup from 'reactjs-popup';
//import { useState } from "react";
import { SidebarItems } from "../../../type/type";
import css from "./ListSidebarItems.module.css";
import SidebarItemOption from "../../SidebarItemOption/SidebarItemOption";

const ListSidebarItems = ({ sidebarItems }: SidebarItems) => {
    return (
        <ul className={css.listwWrapper}>
            {sidebarItems.map(item => (
                <Popup trigger=
                    {<li key={item.id} className={css.listwWrapper_item}>
                        <img className={css.img} src={item.img} alt={item.name} />
                        <p className={css.name}>{item.name}</p>
                    </li>}
                >
                    <SidebarItemOption itemClick={item.name} />
                </Popup>
            ))}
        </ul>
    );
}

export default ListSidebarItems
