import React from 'react';
import css from "./TextOptions.module.css";
import {useAppActions} from "../../../../store/hooks";
import {firstText1, firstText2} from "../../../../data/data";
import TextOptionsSelect from "./TextOptionsSelect/TextOptionsSelect"

function TextOptions() {
    const {
        createNewBlock,
    } = useAppActions();

    const addText1 = () => {
        createNewBlock(firstText1);
    };

    const addText2 = () => {
        createNewBlock(firstText2);
    };

    return (
        <div className={css.wrapper}>
            <button onClick={addText1}>Добавить текст 1</button>
            <button onClick={addText2}>Добавить текст 2</button>
            <TextOptionsSelect />
        </div>


    );
}


export default TextOptions