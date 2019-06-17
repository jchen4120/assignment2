import { combineReducers } from 'redux';

const todoReducer = (todoItems = [], action) => {
	if (action.type === 'ADD_TODO_SUCCESS') {
		return action.todos;
	} else if (action.type === 'DELETE_SUCCESS') {
    return action.todos;
  } else if (action.type === 'EDIT_SUCCESS') {
    return action.todos;
  } else if (action.type === 'FETCH_TODO_LIST') {
    return action.todos;
  } else {
    return todoItems;
  }
};

const showDetailReducer = (showDetails = false, action) => {
  if (action.type === 'SHOW_DETAILS') {
    return true;
  } else {
    return false;
  }
}

const currentItemReducer = (currItem = {}, action) => {
  if (action.type === 'SHOW_DETAILS') {
    return action.item;
  } else {
    return {id: 0, message: ''};
  }
}

const reducers = combineReducers({
  todoItems: todoReducer,
  showDetail: showDetailReducer,
  currentItem: currentItemReducer
});

export default reducers;
