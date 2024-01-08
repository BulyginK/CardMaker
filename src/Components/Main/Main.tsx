import React, {useState} from 'react';
import css from "./Main.module.css";
import Sidebar from '../Sidebar/Sidebar';
import Canvas from '../Canvas/Canvas';
import CanvasBlocks from '../CanvasBlocks/CanvasBlocks';
import {createNewCanvas} from "../../store/actionCreators";
import { useAppActions } from "../../store/hooks";
import {useSelector} from "react-redux";
import {selectEditor} from "../../store/selectors";
import {newTemplate} from "../../data/data";


const Main = () => {
    const editorModel = useSelector(selectEditor);
    const {
        createNewCanvas,
    } = useAppActions();

    const canvasHandler = () => {
        createNewCanvas(newTemplate);
    };

    return (
        <div className={css.wrapper}>
            <Sidebar canvasHandler={canvasHandler}/>
            <Canvas />
            <CanvasBlocks />
        </div>
    );
}

export default Main