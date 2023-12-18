import {Editor} from "../type/type";
import { CanvasActionType } from "./typeActions";



export const createCanvas = (payload: Editor) => {
    return {
        type: CanvasActionType.CREATE_CANVAS,
        payload: payload
    }
}

export const clearCanvas = (payload: Editor) => {
    return {
        type: CanvasActionType.CLEAR_CANVAS,
        payload: payload
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