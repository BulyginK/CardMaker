import {ArtObjectType, ImageBlockType, Template, TextBlockType} from "../model/type";
import { CanvasActionType } from "./typeActions";

function createNewCanvas (payload: Template) {
    return {
        type: CanvasActionType.CREATE_CANVAS,
        payload: payload
    }
}

function createNewBlock (payload: TextBlockType | ImageBlockType | ArtObjectType) {
    return {
        type: CanvasActionType.ADD_BLOCK,
        payload: payload
    }
}

function changeTextFontFamily (payload: { blockId: string, newFontFamily: string }) {
    return {
        type: CanvasActionType.CHANGE_TEXT_FONT_FAMILY,
        payload: payload
    }
}

function getSelectedObjectId (blockId: string) {
    return {
        type: CanvasActionType.GET_SELECTED_BLOCK_ID,
        payload: blockId
    }
}

export {createNewCanvas, createNewBlock, changeTextFontFamily, getSelectedObjectId}