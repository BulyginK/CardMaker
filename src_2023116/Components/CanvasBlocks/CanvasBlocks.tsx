import React from 'react';
import css from "./CanvasBlocks.module.css";
import dbCanvasBlocks from "../../data/data";
import ListCanvasBlocks from "../ListCanvasBlocks/ListCanvasBlocks";


function Sidebar() {
    return (
        <div className={css.wrapper}>
            <ListCanvasBlocks canvasBlocks={dbCanvasBlocks.objects.blocks.canvasBlocks} />
        </div>
    );
}

export default Sidebar