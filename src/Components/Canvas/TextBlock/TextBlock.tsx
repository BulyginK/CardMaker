import React from "react";
import css from "./TextBlock.module.css";
import { TextBlockType } from "../../../model/type";
import { useAppActions } from "../../../store/hooks";
import BlockSelected from "../BlockSelected/BlockSelected";

type textBlockProps = {
  textBlock: TextBlockType;
  isSelected: boolean;
};

function TextBlock({ textBlock, isSelected }: textBlockProps) {
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

  const getObjectId = (event: React.MouseEvent) => {
    const eventTarget = event.target as HTMLElement;
    const parentElementId = eventTarget.parentElement?.id;
    if (parentElementId) getSelectedObjectId(parentElementId);
  };
  let classNameIfSelected = "";
  if (isSelected)
  {
    classNameIfSelected += css.border;
  }

  return (
    <div
        className={css.text_wrapper + " " + classNameIfSelected}
        style={{
          ...textBlock.size,
          ...textBlock.position,
        }}>
      <div
        className={css.text}
        id={textBlock.id}
        onClick={getObjectId}
      >
        <textarea
          className={css.textarea}
          style={textStyle}
          defaultValue={textBlock.value}
          placeholder={textBlock.value}
        />
      </div>

      {isSelected && <BlockSelected />}
    </div>
  );
}

export default TextBlock;
