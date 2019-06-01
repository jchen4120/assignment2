import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo, showDetailedView } from '../actions';

class TodoList extends React.Component {
  constructor() {
     super();
     this.completeItem = this.completeItem.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
   }

   completeItem(todoItem) {
     this.props.completeTodo(todoItem.id);
     this.props.showDetailedView(todoItem.message);
   }

   deleteItem(id) {
     this.props.deleteTodo(id);
   }

   render() {
     return (
       <div>
        <ul className="list-of-messages">
          {this.props.todoItems.map(item => {
            return (
              <li className="todo-item" key={item.id}>
                <div className={"todo-message " + (item.completed? "crossed-out": "")}>* {item.message}</div>
                <div className="todo-buttons">
                  <button className="list-button" onClick={()=>this.completeItem(item)}>complete</button>
                  <button className="list-button" onClick={()=>this.deleteItem(item.id)}>remove</button>
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

 export default connect(mapStateToProps, { deleteTodo, completeTodo, showDetailedView })(TodoList);
