import {combineReducers} from "redux";
import {createCanvas} from '../actions'
import {Editor} from "../type/type";
import { CanvasActionType, Action} from "./typeActions"
import {clearTemplate, newTemplate} from "../data/data";
import canvas from "../Components/Canvas/Canvas";


const initialState: Editor = {
    template: clearTemplate,
    selectedObjectId: [],
}
const canvasReducer = (state: Editor = initialState, action: Action): Editor => {
    switch (action.type) {
        case CanvasActionType.CREATE_CANVAS:
            return {
                ...state,
                template: action.payload,
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    canvas: canvasReducer,
})
export {rootReducer}