import {
  ArtObjectType,
  Editor,
  ImageBlockType,
  Template,
  TextBlockType,
} from "../model/type";

enum CanvasActionType {
  CREATE_CANVAS = "CREATE_CANVAS",
  ADD_BLOCK = "ADD_BLOCK",
  CHANGE_TEXT_FONT_FAMILY = "CHANGE_TEXT_FONT_FAMILY",
  GET_SELECTED_BLOCK_ID = "GET_SELECTED_BLOCK_ID",
  LOAD_EDITOR = "LOAD_EDITOR",
}

interface createNewCanvas {
  type: CanvasActionType.CREATE_CANVAS;
  payload: Template;
}

interface addBlock {
  type: CanvasActionType.ADD_BLOCK;
  payload: TextBlockType | ImageBlockType | ArtObjectType;
}

interface changeTextFontFamily {
  type: CanvasActionType.CHANGE_TEXT_FONT_FAMILY;
  payload: {
    blockId: string;
    newFontFamily: string;
  };
}

interface getSelectedObjectId {
  type: CanvasActionType.GET_SELECTED_BLOCK_ID;
  payload: string;
}

interface loadEditor {
  type: CanvasActionType.LOAD_EDITOR;
  payload: Editor;
}

type Action =
  | createNewCanvas
  | addBlock
  | changeTextFontFamily
  | getSelectedObjectId
  | loadEditor;

export { CanvasActionType, type Action };
