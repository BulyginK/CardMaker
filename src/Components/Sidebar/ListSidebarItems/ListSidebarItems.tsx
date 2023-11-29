import {SidebarItem, SidebarItems} from "../../../type/type";
import css from "./ListSidebarItems.module.css";


type sidebarItemsProps = {
    sidebarItems: Array<SidebarItem>;
    itemAlt: (e: any) => string
}

const ListSidebarItems = ({ sidebarItems, itemAlt}: sidebarItemsProps) => {
    return (
        <ul className={css.wrapper}>{sidebarItems.map(item => (
            <li key={item.id} className={css.item} onClick={itemAlt}>
                <img className={css.img} src={item.img} alt={item.name} />
                <p className={css.name}>{item.name}</p>
            </li>
        ))}</ul>
    );
}

export default ListSidebarItems
