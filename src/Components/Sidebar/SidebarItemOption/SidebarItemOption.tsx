import React from 'react';
import css from "./SidebarItemOption.module.css";
import CanvasOptions from './CanvasOptions/CanvasOptions';
import TemplateOptions from './TemplateOptions/TemplateOptions';
import TextOptions from './TextOptions/TextOptions';
import ImageOptions from './ImageOptions/ImageOptions';
import ArtObjectOptions from "./ArtObjectOptions/ArtObjectOptions";
import {SidebarItem} from "../../../type/type";

type SidebarItemProps = {
    item: string,
    canvasHandler: () => void;
}
function SidebarItemOption(props: SidebarItemProps) {
    switch (props.item) {
            case "Холст":
                return (
                    <CanvasOptions canvasHandler={canvasHandler}/>
                );
            case "Шаблоны":
                return (
                    <TemplateOptions />
                );
            case "Фото":
                return (
                    <ImageOptions />
              );
            case "Текст":
                return (
                    <TextOptions />
                );
            case "АртОбъект":
                return (
                    <ArtObjectOptions />
                );

            default:
                return null;

        }
    }

export default SidebarItemOption