import {combineReducers} from "redux";
import {createCanvas, clearCanvas} from './actions'
import {Editor} from "../type/type";
// import editor from "../data/data";
import Action from "./typeActions"


let editor: Editor = {
    template: {
        id: "id000",
        canvas: {
            id: "0001",
            blocks: [],
            size: {
                width: 800,
                height: 600,
            },
            background: {
                type: 'color',
                data: '#ffffff',
            },
        },
    },
    selectedObjectId: []
}

let initialState = {
    editor: {...editor}
}
const canvasReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'CREATE_CANVAS':
            const newTemplate = (action as typeCreateCanvas).payload;
            return {
                editor: createCanvas(state.editor, newTemplate)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    canvas: canvasReducer,
})
export default rootReducer