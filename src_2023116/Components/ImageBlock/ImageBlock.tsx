import React from "react";
import css from "./ImageBlock.module.css";
import { ImageBlockType } from "../../type/type";

type imageBlockProps = {
    imageBlock: ImageBlockType;
};

function ImageBlock({imageBlock} : imageBlockProps) {
    return (
        <div    className={css.image} 
                id={imageBlock.id}
                style={{
                    ...imageBlock.size,
                    ...imageBlock.position,
                }}>
            <img src={imageBlock.data} alt="img" />
        </div>
    );
}

export default ImageBlock;