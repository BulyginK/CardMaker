import { combineReducers } from "redux";
import { Editor } from "../type/type";
import { CanvasActionType, Action} from "./typeActions"
import { clearTemplate } from "../data/data";
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
        case CanvasActionType.ADD_TEXT:
            return {
                ...state.template,
                selectedObjectId: [],
                template: {
                    ...state.template,
                    canvas: {
                        ...state.template.canvas,
                        blocks: [ ...state.template.canvas.blocks, action.payload ]
                    }
                }
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    canvasReducer,
})
export default rootReducer