import {Template, TextBlockType} from "../type/type";
import { CanvasActionType } from "./typeActions";

function createNewCanvas (payload: Template) {
    return {
        type: CanvasActionType.CREATE_CANVAS,
        payload: payload
    }
}

function createNewText (payload: TextBlockType) {
    return {
        type: CanvasActionType.ADD_TEXT,
        payload: payload
    }
}

export {createNewCanvas, createNewText}