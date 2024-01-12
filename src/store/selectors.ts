import { RootState } from "./store";
import { Editor } from "../type/type";

export const selectEditor = (state: RootState) => state.canvasReducer as Editor;