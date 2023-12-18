import {Editor} from "../type/type";

export const CanvasActionType = {
    CREATE_CANVAS: 'CREATE_CANVAS',
    CLEAR_CANVAS: 'CLEAR_CANVAS',
}

type typeCreateCanvas = {
    type: typeof CanvasActionType.CREATE_CANVAS;
    payload: Editor;
}

type typeClearCanvas = {
    type: typeof CanvasActionType.CLEAR_CANVAS;
    payload: Editor;
}

type Action = typeCreateCanvas | typeClearCanvas

export default Action