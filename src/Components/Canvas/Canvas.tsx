import React from "react";
import css from "./Canvas.module.css";
import TextBlock from "./TextBlock/TextBlock";
import ImageBlock from "./ImageBlock/ImageBlock";
import ArtObject from "./ArtObject/ArtObject";
import { useSelector } from "react-redux";
import { selectEditor } from "../../store/selectors";

function Canvas() {
  const state = useSelector(selectEditor);
  const sizeCanvas = {
    width: state.template.canvas.size.width,
    height: state.template.canvas.size.height,
  };
  const blocks = state.template.canvas.blocks;

  return (
    <div className={css.wrapper} style={sizeCanvas}>
        {blocks.map((block) => {
          const isBlockSelected = state.selectedObjectId.includes(block.id);

          switch (block.type) {
            case "image":
              return <ImageBlock key={block.id} imageBlock={block} />;
            case "text":
              return (
                <TextBlock
                  key={block.id}
                  textBlock={block}
                  isSelected={isBlockSelected}
                />
              );
            case "art":
              return <ArtObject key={block.id} artObject={block} />;
            default:
              return null;
          }
        })}
    </div>
  );
}

export default Canvas;
