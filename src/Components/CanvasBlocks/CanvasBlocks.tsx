import React from 'react';
import css from "./CanvasBlocks.module.css";
import dbCanvasBlocks from "../../data/data";
import ListCanvasBlocks from "./ListCanvasBlocks/ListCanvasBlocks";


function CanvasBlocks() {
    return (
        <div className={css.wrapper}>
            <ListCanvasBlocks canvasBlocks={dbCanvasBlocks.objects.blocks.canvasBlocks} />
        </div>
    );
}

export default CanvasBlocks