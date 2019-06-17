import React from 'react';
import { connect } from 'react-redux';
import { deleteItems, showDetailedView, fetchTodoListData } from '../actions';

class TodoList extends React.Component {
  constructor() {
     super();
     this.editItem = this.editItem.bind(this);
     this.deleteAll = this.deleteAll.bind(this);
   }

   editItem(todoItem) {
     this.props.showDetailedView(todoItem);
   }

   deleteAll() {
     this.props.deleteItems();
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
              <li className="todo-item" key={item.id}>
                <div className="todo-message">* {item.message}</div>
                <div className="todo-buttons">
                  <button className="list-button" onClick={()=>this.editItem(item)}>edit</button>
                </div>
              </li>)
          })}
        </ul>
        <button className={"list-button"} onClick={()=>this.deleteAll()}>clear list</button>
       </div>
     );
   }
 }

 const mapStateToProps = (state) => {
  return { todoItems: state.todoItems };
}

 export default connect(mapStateToProps, { deleteItems, showDetailedView, fetchTodoListData })(TodoList);
