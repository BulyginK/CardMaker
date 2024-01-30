import React from "react";
import css from "./BlockSelected.module.css";
function BlockSelected() {
    return (
        <div>
            <div className={css.top_left + " " + css.resize} />
            <div className={css.top_right + " " + css.resize} />
            <div className={css.bottom_right + " " + css.resize} />
            <div className={css.bottom_left + " " + css.resize} />
        </div>
    );
}

export default BlockSelected;