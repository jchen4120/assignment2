import axios from 'axios';

export const fetchData = (data) => {
  return {
    type: 'FETCH_TODO_LIST',
    todos: data
  }
}

export const fetchTodoListData = () => {
  return (dispatch) => {
    return axios.get('/todoList')
      .then(response => {
        dispatch(fetchData(response.data))
      }).catch(error => {
        throw(error);
      });
  }
}

export const addTodoSuccess = (data) => {
  return {
    type: 'ADD_TODO_SUCCESS',
    todos: data
  }
}

export const addTodoError = (error) => {
  return {
    type: 'ADD_TODO_ERROR',
    error: error
  }
}

export const addTodo = item => {
  return (dispatch) => {
    return axios.post('/todoList', {message: item})
    .then(response => {
      dispatch(addTodoSuccess(response.data))
    })
    .catch(error => {
      dispatch(error);
    });
  };
}

export const deleteSuccess = (data) => {
  return {
    type: 'DELETE_SUCCESS',
    todos: data
  }
}

export const deleteError = (error) => {
  return {
    type: 'DELETE_ERROR',
    error: error
  }
}

export const deleteItem = item => {
  return (dispatch) => {
    return axios.delete('/todoList', {
      data: {
        id: item._id
      }})
      .then(response => {
        dispatch(deleteSuccess(response.data))
      })
      .catch(error => {
        dispatch(deleteError(error));
      });
  }
}

export const editSuccess = (data) => {
  return {
    type: 'EDIT_SUCCESS',
    todos: data
  }
}

export const editError = (error) => {
  return {
    type: 'EDIT_ERROR',
    error: error
  }
}

export const editTodoItem = item => {
  return (dispatch) => {
    return axios.put('/todoList/edit', {
      id: item.id,
      message: item.message
    })
    .then(response => {
      dispatch(editSuccess(response.data))
    })
    .catch(error => {
      dispatch(editError(error));
    });
  };
}

export const showDetailedView = item => {
  return {
    type: 'SHOW_DETAILS',
    item: item
  }
}

export const hideDetailedView = () => {
  return {
    type: 'HIDE_DETAILS'
  }
}
