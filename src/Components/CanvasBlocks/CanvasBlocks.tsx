import React from 'react';
import css from "./CanvasBlocks.module.css";
import ListCanvasBlocks from "./ListCanvasBlocks/ListCanvasBlocks";


function CanvasBlocks() {
    return (
        <div className={css.wrapper}>
            <ListCanvasBlocks />
        </div>
    );
}

export default CanvasBlocks