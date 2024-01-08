import React from "react";
import css from "./ListCanvasBlocks.module.css";
import {useAppSelector} from "../../../data/hooks";

const ListCanvasBlocks = () => {
  //const blocks = useAppSelector((state) => state.canvas);

  return (
    <ul className={css.listwWrapper}>
      {/*{canvasBlocks.blocksType.map((block) => {*/}
      {/*  switch (block.type) {*/}
      {/*    case "image":*/}
      {/*        return (*/}
      {/*          <p key={block.id} >{block.type} {block.id}</p>*/}
      {/*        );*/}
      {/*    case "text":*/}
      {/*        return (*/}
      {/*          <p key={block.id} >{block.type} {block.id} </p>*/}
      {/*        );*/}
      {/*    case "art":*/}
      {/*      return (*/}
      {/*        <p key={block.id} >{block.type} {block.id}</p>*/}
      {/*      );*/}
      {/*    default:*/}
      {/*        return null;*/}
      {/*}*/}
      {/*})}*/}
    </ul>
  );
}

export default ListCanvasBlocks