import { createStore } from 'redux';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions/index.js';
import { todoApp } from './reducers/index.js';

let store = createStore(todoApp);

//Add todo
var addTodoElem = document.getElementById('addTodo');
var input = addTodoElem.getElementsByTagName('input')[0];
var button = addTodoElem.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
  //Pass store add todo action when button clicked.
  var todoText = input.value;
  store.dispatch(addTodo(todoText));
});

//Toggle Todo
var todoList = document.getElementById('todoList');
var elements = todoList.getElementsByTagName('li');
var listArray = [...elements];
listArray.forEach((v,index) => {
  v.addEventListener('click', e => {
    //Pass store toggle todo action when todo clicked.
    store.dispatch(toggleTodo(index));
  });
});

//Filter
var links = document.getElementById('links');
var childs = links.childNodes;
var childList = [...childs];
childList.filter(v => v.nodeName != '#text').forEach(v => {
  v.addEventListener('click', e => {
    //Pass store filter action when link clicked.
    var filterText = v.innerHTML;
    store.dispatch(setVisibilityFilter(filterText));
  });
});

var contents = document.getElementById('contents')
contents.innerHTML = store.getState().toString()
