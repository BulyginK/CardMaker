import React from "react";
import css from "./ArtObject.module.css";
import { ArtObjectType } from "../../../type/type";

type artObjectProps = {
    artObject: ArtObjectType;
};

function TextBlock({artObject} : artObjectProps) {
    return (
        <div id={artObject.id}>
            <p>

            </p>
        </div>
    );
}

export default TextBlock;