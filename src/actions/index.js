var nextItemId=10

export const addTodo = item => {
  nextItemId++;
  return {
    type: 'ADD_TODO',
    id: nextItemId,
    message: item
  }
}

export const deleteTodo = itemId => {
  return {
    type: 'DELETE_TODO',
    id: itemId
  }
}

export const completeTodo = itemId => {
  return {
    type: 'COMPLETE_TODO',
    id: itemId
  }
}

export const showDetailedView = item => {
  return {
    type: 'SHOW_DETAILS',
    message: item
  }
}

export const hideDetailedView = item => {
  return {
    type: 'HIDE_DETAILS'
  }
}
