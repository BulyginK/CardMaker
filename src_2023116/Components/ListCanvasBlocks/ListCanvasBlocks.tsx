import React from "react";
import css from "./ListCanvasBlocks.module.css";
import { BlocksType } from "../../type/type";
import dbCanvas from "../../data/data";

const ListCanvasBlocks = ({ canvasBlocks }: BlocksType) => {
  return (
    <ul className={css.listwWrapper}>
      {canvasBlocks.map((block) => {
        switch (block.type) {
          case "image":
              return (
                <p key={block.id} >{block.type} {block.id}</p>
              );
          case "text":
              return (
                <p key={block.id} >{block.type} {block.id} </p>
              );
          case "art":
            return (
              <p key={block.id} >{block.type} {block.id}</p>
            );
          default:
              return null;
      }
      })}
    </ul>
  );
}

export default ListCanvasBlocks