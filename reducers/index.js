import { combineReducers } from 'redux';

//function to operate each todo
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }

        return Object.assign({},state, {
          completed: !state.completed
        });
        default:
          return state;
  }
}

//Function to operate multiple todos
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,todo(undefined,action)
      ];
      case 'TOGGLE_TODO':
        return state.map(t => todo(t,action)
      );
    default:
    return state;
  }
}

//Function to render todos
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
    return state;
  }
}

//Open functions
const todoApp = combineReducers({
  todos,
  visibilityFilter
});
export default todoApp;
