import {Template} from "../type/type";

enum CanvasActionType {
    CREATE_CANVAS = 'CREATE_CANVAS',
    CLEAR_CANVAS = 'CLEAR_CANVAS',
}

export const createCanvas = (newTemplate: Template) => {
    return {
        type: CanvasActionType.CREATE_CANVAS,
        payload: newTemplate
    }

}

export const clearCanvas = (newTemplate: Template) => {
    return {
        type: CanvasActionType.CLEAR_CANVAS,
        payload: newTemplate
    }

}

// type ClearCanvas = () => {
//     type: CanvasActionType.CREATE_CANVAS,
//     payload: {
//         width: number,
//         height: number
//     }
// }

// type Action = createCanvas | clearCanvas

//export default Action