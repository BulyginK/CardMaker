import {ArtObjectType, ImageBlockType, Template, TextBlockType} from "../type/type";

enum CanvasActionType {
    CREATE_CANVAS = 'CREATE_CANVAS',
    CLEAR_CANVAS = 'CLEAR_CANVAS',
    ADD_TEXT = 'ADD_TEXT'
}

interface createNewCanvas {
    type: CanvasActionType.CREATE_CANVAS;
    payload: Template;
}

interface clearCanvas {
    type: CanvasActionType.CLEAR_CANVAS;
    payload: Template;
}

interface addText {
    type: CanvasActionType.ADD_TEXT;
    payload: TextBlockType;
}

type Action =
    | createNewCanvas
    | clearCanvas
    | addText

export { CanvasActionType, type Action };