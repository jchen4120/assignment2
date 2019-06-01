import { combineReducers } from 'redux';

const INITIAL_TODOS = [
  {id: 0, message: "watch Endgame", completed: false},
  {id: 1, message: "have a beach day", completed: false},
  {id: 2, message: "assignments :(", completed: false}
]

const todoReducer = (todoItems = INITIAL_TODOS, action) => {
	if (action.type === 'ADD_TODO') {
		return [...todoItems, {
      id: action.id,
      message: action.message,
      completed: false
    }]
	} else if (action.type === 'DELETE_TODO') {
    return todoItems.filter(item => item.id !== action.id)
  } else if (action.type === 'COMPLETE_TODO') {
    return todoItems.map(item => {
      if (item.id === action.id) {
        return {id: item.id, message: item.message, completed: true}
      } else {
        return item
      }
    })
  } else {
    return todoItems;
  }
};

const INITIAL_DETAILEDVIEW = {showDetail: false, message: ''};

const detailedViewReducer = (message = INITIAL_DETAILEDVIEW, action) => {
  if (action.type === 'SHOW_DETAILS') {
    return {
      showDetail: true,
      message: action.message
    };
  } else if (action.type === 'HIDE_DETAILS') {
    return INITIAL_DETAILEDVIEW;
  } else {
    return message;
  }
}

const reducers = combineReducers({
  todoItems: todoReducer,
  message: detailedViewReducer
});

export default reducers;
