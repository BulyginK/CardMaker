import React from "react";
import css from "./Canvas.module.css";
import dbCanvas from "../../data/data";
import TextBlock from "./TextBlock/TextBlock";
import ImageBlock from "./ImageBlock/ImageBlock";
import ArtObject from "./ArtObject/ArtObject";

function Canvas() {
    return (
        <div className={css.wrapper} style={dbCanvas.objects.size}>
            <div>
                {dbCanvas.objects.blocks.canvasBlocks.map((block) => {
                    switch (block.type) {
                        case "image":
                            return (
                                <ImageBlock
                                    key={block.id}
                                    imageBlock={block}
                                />
                            );
                        case "text":
                            return (
                                <TextBlock
                                    key={block.id}
                                    textBlock={block}
                                />
                            );
                        case "art":
                            return (
                                <ArtObject
                                    key={block.id}
                                    artObject={block}
                                />
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
}

export default Canvas;