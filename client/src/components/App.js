import React from 'react';
import './App.css';
import AddTodoItem from './AddTodoItem.js'
import TodoList from './TodoList.js'
import DetailedView from './detailedView.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title-text">
          Jennifer's Todo List
        </div>
        <AddTodoItem/>
        <TodoList/>
        <DetailedView/>
      </header>
    </div>
  );
}

export default App;
