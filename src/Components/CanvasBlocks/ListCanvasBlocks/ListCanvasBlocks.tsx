import React from "react";
import css from "./ListCanvasBlocks.module.css";
import { useSelector } from "react-redux";
import { selectEditor } from "../../../store/selectors";

const ListCanvasBlocks = () => {
  const state = useSelector(selectEditor);
  const blocks = state.template.canvas.blocks;

  return (
    <ul className={css.listwWrapper}>
      {blocks.map((block) => {
        switch (block.type) {
          case "image":
            return (
              <p key={block.id}>
                {block.type} {block.id}
              </p>
            );
          case "text":
            return (
              <p key={block.id}>
                {block.type} {block.id}{" "}
              </p>
            );
          case "art":
            return (
              <p key={block.id}>
                {block.type} {block.id}
              </p>
            );
          default:
            return null;
        }
      })}
    </ul>
  );
};

export default ListCanvasBlocks;
