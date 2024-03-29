import React from "react";
import css from "./TextOptionsSelect.module.css";
import { useAppActions } from "../../../../../store/hooks";

const fontFamilyUsed = ["Pacifico", "Roboto", "Open Sans", "Lemon"];
function TextOptionsSelect() {
  const { changeTextFontFamily } = useAppActions();

  const changeFontFamily = (event: React.MouseEvent) => {
    const eventTarget = event.target as HTMLElement;
    const parentElementInnerText = eventTarget.textContent;

      fontFamilyUsed.map((fontFamily) => {
        if (parentElementInnerText == fontFamily)
          changeTextFontFamily({ blockId: "id003", newFontFamily: fontFamily });
      });
  };

  return (
    <div>
      <div>
        Шрифт
        <p className={css.pacifico_select} onClick={changeFontFamily}>
          Pacifico
        </p>
        <p className={css.roboto_select} onClick={changeFontFamily}>
          Roboto
        </p>
        <p className={css.openSans_select} onClick={changeFontFamily}>
          Open Sans
        </p>
        <p className={css.lemon_select} onClick={changeFontFamily}>
          Lemon
        </p>
      </div>
    </div>
  );
}

export default TextOptionsSelect;
