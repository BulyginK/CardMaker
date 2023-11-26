import Popup from 'reactjs-popup';
//import { useState } from "react";
import { SidebarItems } from "../../../type/type";
import css from "./ListSidebarItems.module.css";
import SidebarItemOption from "../../SidebarItemOption/SidebarItemOption";

type clickItemProps = {
    clickItem: string;
};

const ListSidebarItems = ({ sidebarItems }: SidebarItems, { clickItem }: clickItemProps) => {
    // const [isShown, setIsShown] = useState(false);

    // const handleClick = (e: any) => {
    //     clickItem = e.target.alt;
    //     setIsShown(current => !current);
    //   };



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
                // <li key={item.id} className={css.listwWrapper_item} onClick={handleClick}>
                //         <img className={css.img} src={item.img} alt={item.name} />
                //         <p className={css.name}>{item.name}</p>
                // </li>
            ))}

            {/* {isShown && <SidebarItemOption itemClick = {clickItem }/>} */}

        </ul>
    );
}

export default ListSidebarItems
