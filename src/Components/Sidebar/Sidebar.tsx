import React, { useState } from "react";
import css from "./Sidebar.module.css";
import SidebarItems from "../../data/SidebarItems";
import SidebarItemOption from "./SidebarItemOption/SidebarItemOption";

const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);
  const [clickElem, setClickElem] = useState("");

  const getItemAlt = (event: React.MouseEvent) => {
    event.preventDefault();
    const eventTarget = event.target as HTMLElement;
    const altOfElement = eventTarget.parentElement?.innerText;
    altOfElement != clickElem ? setIsShown(true) : setIsShown(!isShown);
    if (altOfElement) setClickElem(altOfElement);
  };

  const sidebarItems = SidebarItems.map((item) => (
    <li key={item.id} className={css.item} onClick={getItemAlt}>
      <img className={css.img} src={item.img} alt={item.name} />
      <p className={css.name}>{item.name}</p>
    </li>
  ));

  return (
    <div className={css.sidebar}>
      <div className={css.wrapper}>
        <ul className={css.wrapper_items}>{sidebarItems}</ul>
      </div>
      {isShown && <SidebarItemOption item={clickElem} />}
    </div>
  );
};

export default Sidebar;
