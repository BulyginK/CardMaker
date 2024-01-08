import {Editor, Template} from "./type/type";
import {clearTemplate} from "./data/data";

export function createCanvas(state: Editor, payload: {width: number, height: number}): Editor {
    return {
        ...state,
        template: {
            ...state.template,

        },
        selectedObjectId: [],
    }
}