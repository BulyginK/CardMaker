import React from "react";
import CanvasOptions from "./CanvasOptions/CanvasOptions";
import TemplateOptions from "./TemplateOptions/TemplateOptions";
import TextOptions from "./TextOptions/TextOptions";
import ImageOptions from "./ImageOptions/ImageOptions";
import ArtObjectOptions from "./ArtObjectOptions/ArtObjectOptions";

type SidebarItemProps = {
  item: string;
};
function SidebarItemOption(props: SidebarItemProps) {
  switch (props.item) {
    case "Холст":
      return <CanvasOptions />;
    case "Шаблоны":
      return <TemplateOptions />;
    case "Фото":
      return <ImageOptions />;
    case "Текст":
      return <TextOptions />;
    case "АртОбъект":
      return <ArtObjectOptions />;

    default:
      return null;
  }
}

export default SidebarItemOption;
