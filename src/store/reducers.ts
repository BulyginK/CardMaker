import { combineReducers } from "redux";
import { Editor } from "../model/type";
import { CanvasActionType, Action} from "./typeActions"
import { clearTemplate } from "../data/data";


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
        case CanvasActionType.ADD_BLOCK:
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
        case CanvasActionType.CHANGE_TEXT_FONT_FAMILY:
            const { blockId, newFontFamily } = action.payload;
            return {
                ...state.template,
                selectedObjectId: [],
                template: {
                    ...state.template,
                    canvas: {
                        ...state.template.canvas,
                        blocks: state.template.canvas.blocks.map((block) => {
                            if (block.id === blockId) {
                                return {
                                    ...block,
                                    fontFamily: newFontFamily
                                }
                            }
                            else {
                                return block
                            }
                        })
                    }
                }
            }
        case CanvasActionType.GET_SELECTED_BLOCK_ID:
            return {
                ...state,
                selectedObjectId: [ ...state.selectedObjectId, action.payload ],
                }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    canvasReducer,
})
export default rootReducer