import React from 'react';
import css from "./ImageOptions.module.css";


function ImageOptions() {
    return (
        <div className={css.wrapper}>
            <button>Добавить картинку с компьютера</button>
            <button>Добавить картинку с Pexels.com</button>
        </div>
    );
}

export default ImageOptions