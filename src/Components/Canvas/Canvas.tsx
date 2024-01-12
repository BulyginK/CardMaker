import React from "react";
import css from "./Canvas.module.css";
import TextBlock from "./TextBlock/TextBlock";
import ImageBlock from "./ImageBlock/ImageBlock";
import ArtObject from "./ArtObject/ArtObject";
import { useSelector } from "react-redux";
import { selectEditor } from "../../store/selectors";

function Canvas() {
    const state = useSelector(selectEditor);
    let sizeCanvas = {
        width: state.template.canvas.size.width,
        height: state.template.canvas.size.height,
    }
    let blocks = state.template.canvas.blocks;

    return (
        <div className={css.wrapper} style={sizeCanvas}>
            <div>
                {/*{*/}
                {/*    //isSelected &&*/}
                {/*    (*/}
                {/*    <>*/}
                {/*        <div*/}
                {/*            className={*/}
                {/*                css["top-left"] + " " + css.resize*/}
                {/*            }*/}
                {/*        />*/}

                {/*        <div*/}
                {/*            className={*/}
                {/*                css["top-right"] + " " + css.resize*/}
                {/*            }*/}
                {/*        />*/}

                {/*        <div*/}
                {/*            className={*/}
                {/*                css["bottom-right"] + " " + css.resize*/}
                {/*            }*/}
                {/*        />*/}

                {/*        <div*/}
                {/*            className={*/}
                {/*                css["bottom-left"] + " " + css.resize*/}
                {/*            }*/}
                {/*        />*/}

                {/*    </>*/}
                {/*)}*/}

                {blocks.map((block) => {
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