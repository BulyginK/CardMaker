import React from 'react';
import css from "./ArtObjectOptions.module.css";


function ArtObjectOptions() {
    return (
        <div className={css.wrapper}>
            <div>Простые формы</div>
            <div>Контуры</div>
            <div>Icons</div>
        </div>
    );
}

export default ArtObjectOptions