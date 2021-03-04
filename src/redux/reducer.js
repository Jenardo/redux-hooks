import { act } from 'react-dom/test-utils';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './actions';
import { todo } from './state';

export const reducer = (state = todo, action) => {
  let newTodos;
  //   console.log(state);
  //   console.log(action);
  switch (action.type) {
    case ADD_TODO:
      if (action.payload.name === undefined || action.payload.name === '') {
        alert('Nome vuoto');
        // console.log('Nome vuoto');
      } else {
        newTodos = [...state];
        newTodos.push(action.payload);
        return newTodos;
      }
    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case UPDATE_TODO:
      console.log('updating');
      console.log(action);
      console.log(state);
      newTodos = [...state];
      [...newTodos].forEach((td) => {
        if (td.id === action.payload.id) {
          if (action.payload.name === undefined || action.payload.name === '') {
            alert('Nome vuoto');
          } else {
            td.name = action.payload.name;
          }
          td.description = action.payload.description;
        }
      });
      break;
    default:
      return state;
  }
  return state;
};
