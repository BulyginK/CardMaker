import {Editor} from "../type/type";

type typeCreateCanvas = {
    type: 'CREATE_CANVAS';
    payload: Editor;
}

type Action = typeCreateCanvas

export default Action