import React from "react";
import css from "./ImageBlock.module.css";
import { ImageBlockType } from "../../../model/type";
import {useAppActions} from "../../../store/hooks";

type imageBlockProps = {
    imageBlock: ImageBlockType;
};

function ImageBlock({imageBlock} : imageBlockProps) {
    const {
        getSelectedObjectId,
    } = useAppActions();

    const getObjectId = (e: any)=> {
        console.log(e.target)
        //getSelectedObjectId(e.target.id)
    }

    return (
        <div    className={css.image} 
                id={imageBlock.id}
                style={{
                    ...imageBlock.size,
                    ...imageBlock.position,
                }}
        >
            <img src={imageBlock.data} alt="img" onClick={getObjectId}/>
        </div>
    );
}

export default ImageBlock;