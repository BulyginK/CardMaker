import {Template} from "../type/type";

enum CanvasActionType {
    CREATE_CANVAS = 'CREATE_CANVAS',
    CLEAR_CANVAS = 'CLEAR_CANVAS',
}

interface createNewCanvas {
    type: CanvasActionType.CREATE_CANVAS;
    payload: Template;
}

interface clearCanvas {
    type: CanvasActionType.CLEAR_CANVAS;
    payload: Template;
}

type Action = createNewCanvas | clearCanvas

export { CanvasActionType, type Action };