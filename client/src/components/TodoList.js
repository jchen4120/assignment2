import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, showDetailedView, fetchTodoListData } from '../actions';

class TodoList extends React.Component {
  constructor() {
     super();
     this.editItem = this.editItem.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
   }

   editItem(todoItem) {
     this.props.showDetailedView(todoItem);
   }

   deleteItem(todoItem) {
     this.props.deleteItem(todoItem);
   }

   componentDidMount() {
     this.props.fetchTodoListData();
   }

   render() {
     return (
       <div className="todo-list-container">
        <ul className="list-of-messages">
          {this.props.todoItems.map(item => {
            return (
              <li className="todo-item" key={item._id}>
                <div className="todo-message">* {item.message}</div>
                <div className="todo-buttons">
                  <button className="list-button" onClick={()=>this.editItem(item)}>edit</button>
                  <button className="list-button" onClick={()=>this.deleteItem(item)}>delete</button>
                </div>
              </li>)
          })}
        </ul>
       </div>
     );
   }
 }

 const mapStateToProps = (state) => {
  return { todoItems: state.todoItems };
}

 export default connect(mapStateToProps, { deleteItem, showDetailedView, fetchTodoListData })(TodoList);
