import React from 'react';
import css from "./SidebarItemOption.module.css";
import CanvasOptions from './CanvasOptions/CanvasOptions';
import TemplateOptions from './TemplateOptions/TemplateOptions';
import TextOptions from './TextOptions/TextOptions';
import ImageOptions from './ImageOptions/ImageOptions';
import ArtObjectOptions from "./ArtObjectOptions/ArtObjectOptions";


function SidebarItemOption(itemClick: any ) {
        switch (itemClick.itemClick) {
            case "Холст":
                return (
                    <CanvasOptions />
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

        }};

export default SidebarItemOption