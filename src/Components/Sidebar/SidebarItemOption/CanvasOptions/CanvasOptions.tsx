import React from "react";
import css from "./CanvasOptions.module.css";
import { useAppActions } from "../../../../store/hooks";
import { newTemplate } from "../../../../data/data";

function CanvasOptions() {
  const { createNewCanvas } = useAppActions();
  function createCanvas() {
    createNewCanvas(newTemplate);
  }

  function clearCanvas() {
    const showCreatCanvas = window.confirm(
      "Текущий холст будет очищен. Вы подтверждаете очистку холста?",
    );
    if (showCreatCanvas) {
      createNewCanvas(newTemplate);
    }
  }

  return (
    <div className={css.wrapper}>
      <button onClick={createCanvas}>Создать холст</button>
      <button onClick={clearCanvas}>Очистить холст</button>
    </div>
  );
}
export default CanvasOptions;
