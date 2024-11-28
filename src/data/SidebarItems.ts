import { SidebarItem } from "../model/type";

const sidebarItems: Array<SidebarItem> = [
  {
    name: "Холст",
    img: "./image/holst.svg",
    id: 1,
    selected: true,
  },
  {
    name: "Шаблоны",
    img: "./image/shablon.svg",
    id: 2,
    selected: false,
  },
  {
    name: "Фото",
    img: "./image/foto.svg",
    id: 3,
    selected: false,
  },
  {
    name: "Текст",
    img: "./image/tekst.svg",
    id: 4,
    selected: false,
  },
  {
    name: "АртОбъект",
    img: "./image/artobject.svg",
    id: 5,
    selected: false,
  },
  {
    name: "Фон",
    img: "./image/fon.svg",
    id: 6,
    selected: false,
  },
  {
    name: "Назад",
    img: "./image/backwards.svg",
    id: 7,
    selected: false,
  },
  {
    name: "Вперед",
    img: "./image/forward.svg",
    id: 8,
    selected: false,
  },
];

export default sidebarItems;
