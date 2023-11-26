type Note = {
  id: string,
  title: string,
  text: string,
  background: string,
  isPinned: boolean,
  isArchive: boolean,
};

type NotesModel = {
  notes: Array<Note>,
  viewMode: 'grid' | 'list'
}

export type {
  Note,
  NotesModel
}