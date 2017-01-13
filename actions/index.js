let nextTodoId = 0; //id for todo

//add todo
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

//Complite todo
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

//Filter Todo
export const setVisibilityFilter = (filer) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
