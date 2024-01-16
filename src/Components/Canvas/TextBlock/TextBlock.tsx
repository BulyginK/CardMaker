import React from "react";
import css from "./TextBlock.module.css";
import { TextBlockType } from "../../../model/type";
import { useAppActions } from "../../../store/hooks";

type textBlockProps = {
  textBlock: TextBlockType;
};

function TextBlock({ textBlock }: textBlockProps) {
  const { fontSize, fontFamily, fontWeight, fontStyle, textDecoration, color } =
    textBlock;

  const textStyle = {
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    textDecoration,
    color,
  };

  const { getSelectedObjectId } = useAppActions();

  const getObjectId = (e: any) => {
    getSelectedObjectId(e.target.parentElement.id);
  };

  return (
    <div
      className={css.text}
      id={textBlock.id}
      style={{
        ...textBlock.size,
        ...textBlock.position,
      }}
      onClick={getObjectId}
    >
      <textarea
        className={css.textarea}
        style={textStyle}
        defaultValue={textBlock.value}
        placeholder={textBlock.value}
      />
    </div>
  );
}

export default TextBlock;
