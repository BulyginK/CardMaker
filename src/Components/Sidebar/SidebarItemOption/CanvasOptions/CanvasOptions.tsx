import React from 'react';
import css from "./CanvasOptions.module.css";
import {Editor} from "../../../../type/type";

interface CanvasOptionsProps {
    canvasHandler: () => void;
}

function CanvasOptions(props: CanvasOptionsProps) {
    debugger
    function canvasHandler() {
        let showCreatCanvas = window.confirm("Текущий холст будет удален. Вы подтверждаете удаление холста?");
        if (showCreatCanvas) {
            //props.onCreateCanvas();
        }
    }


    return (
        <div className={css.wrapper}>
            <button onClick={canvasHandler}>Создать холст</button>
            <button onClick={canvasHandler}>Очистить холст</button>
        </div>
    );
}

export default CanvasOptions;