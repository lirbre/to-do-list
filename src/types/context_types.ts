import { CardProps, PriorityType } from './component_types'

export interface DefaultConfigProps {
  saveOnLS: boolean
  hideComplete: boolean
  sortByPriority: boolean
  priority: PriorityType[]
}

export interface ToDoContextProps {
  addToDo: ({ id, priority, title }: CardProps) => void
  editToDo: (
    position: number,
    newTitle: string,
    newPriority: PriorityType
  ) => void
  completeTodo: (position: number) => void
  removeToDo: (position: number) => void
  ToDoList: CardProps[]
  setToDoList: (newValue: CardProps[]) => void
  shouldHide: boolean
  showComplete(): void
  hideComplete(): void
  desiredPriority: PriorityType[]
  addPriority(priority: PriorityType): void
  removePriority(priority: PriorityType): void
  deleteCompletes(): void
  sortByPriority(): void
  sortById(): void
  byPriority: boolean
  saveToDos: () => void
  notSaveToDos: () => void
  shouldSave: boolean
}
