import React from "react";
import css from "./Header.module.css";
import logoImg from "../../image/logo.png";
import { useSelector } from "react-redux";
import { selectEditor } from "../../store/selectors";
import { Editor } from "../../model/type";
import { useAppActions } from "../../store/hooks";

function Header() {
  const { createLoadCanvas } = useAppActions();

  const state = useSelector(selectEditor);
  function saveJsonObjToFile() {
    const stateJSON = JSON.stringify(state);
    const name = "canvas.json";
    const type = "text/plain";

    const a = document.createElement("a");
    const file = new Blob([stateJSON], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function loadJsonObjFromFile(onLoad: (model: Editor) => void) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";

    input.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (readerEvent) => {
          const content = readerEvent.target?.result as string;
          const model = JSON.parse(content);
          onLoad(model);
        };
        reader.readAsText(file);
      }
    });

    input.click();
    console.log(state);
  }

  const loadFromFile = () => {
    loadJsonObjFromFile((model) => {
      createLoadCanvas(model);
    });
  };

  return (
    <div className={css.wrapper}>
      <img className={css.logoImg} src={logoImg} alt="logo" />
      <h3 className={css.logo}>Card Maker</h3>
      <button className={css.export_button} onClick={saveJsonObjToFile}>
        Экспорт
      </button>
      <button className={css.export_button} onClick={loadFromFile}>
        Импорт
      </button>
    </div>
  );
}

export default Header;
