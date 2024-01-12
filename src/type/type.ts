type Size = {
  width: number;
  height: number;
}

type Position = {
  top: number;
  left: number;
}

type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
}

type Background = {
  type: 'link' | 'base64' | 'color';
  data: string;
}

type Block = {
  id: string;
  size: Size;
  position: Position;
}

type TextStyle = {
  // textAlign: string;
  fontSize: number;
  fontFamily: string;
  fontWeight: number;
  fontStyle: string;
  textDecoration: string;
  color: string;
}

type TextBlockType = Block & {
  type: 'text';
  value: string;
  //color: Color;
  fillColor: Color;
  text: TextStyle;
}

type ImageBlockType = Block & {
  type: 'image';
  typeData: 'link' | 'base64';
  filter: string;
  opacity: number;
  data: string;
}

type ArtObjectType = Block & {
  type: 'art';
  borderColor: Color;
  fillColor: Color;
  data: string;
}

type BlocksType = {
  blocksType: Array<TextBlockType | ImageBlockType | ArtObjectType>;
}

type Canvas = {
  id: string;
  size: Size;
  blocks: Array<TextBlockType | ImageBlockType | ArtObjectType>;
  background: Background;
}

type Template = {
  id: string;
  canvas: Canvas;
};

// type History = {
//   //History 
// }

type SidebarItem = {
  name: string;
  img: string;
  id: number;
  selected: boolean;
}

type SidebarItems = {
  sidebarItems: Array<SidebarItem>;
}

type Editor = {
  template: Template;
  selectedObjectId: string[]
}

export type {
  Editor,
  SidebarItems,
  SidebarItem,
  Template,
  Canvas,
  BlocksType,
  TextBlockType,
  ImageBlockType,
  ArtObjectType,
  Size,
  Position,
  Color,
  Background
}