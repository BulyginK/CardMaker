import React, {useState} from 'react';
import css from "./Main.module.css";
import Sidebar from '../Sidebar/Sidebar';
import Canvas from '../Canvas/Canvas';
import CanvasBlocks from '../CanvasBlocks/CanvasBlocks';
import SidebarItemOption from "../Sidebar/SidebarItemOption/SidebarItemOption";


const Main = () => {


    return (
        <div className={css.wrapper}>
            <Sidebar />
            <Canvas />
            <CanvasBlocks />
        </div>
    );
}

export default Main