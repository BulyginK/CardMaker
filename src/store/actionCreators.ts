import {Editor, Template} from "../type/type";
import { CanvasActionType } from "./typeActions";



function createNewCanvas (payload: Template) {
    return {
        type: CanvasActionType.CREATE_CANVAS,
        payload: payload
    }
}



export {createNewCanvas}