import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

//state => View's property
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
  };
};

//View => State
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  };
};

//Connect
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList); //View

export default VisibleTodoList;
