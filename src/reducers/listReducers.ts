import { TodoItem } from "@/types/TodoItem";


type AddAction = {
  type: 'add';
  payload: {
    label: string;
  }
}

type EditTextAction = {
  type: 'editText';
  payload: {
    id: number;
    newText: string;
  }
}

type RemoveItem = {
  type: 'removeItem';
  payload: {
    id: number;
  }
}

type ToggleDone = {
  type: 'toggleDone';
  payload: {
    id: number;
  }
}

type listActions = AddAction | EditTextAction | RemoveItem | ToggleDone;

export const listReducer = (list:TodoItem[], action: listActions) => {
  //executar alguma acao
  //retornar a lista atualizada
  switch(action.type) {
    case 'add':
    case 'editText':
    case 'removeItem':
    case 'toggleDone':
    default:
      return list;
  } 
}