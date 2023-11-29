import React from 'react';
import css from "./CanvasOptions.module.css";


function CanvasOptions() {
    return (
        <div className={css.wrapper}>
            <button>Создать холст</button>
            <button>Очистить холст</button>
        </div>
    );
}

export default CanvasOptions