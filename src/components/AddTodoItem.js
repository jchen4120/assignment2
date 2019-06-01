import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class AddTodoItem extends React.Component {
  constructor() {
     super();
     this.state = {value: ''};

     this.handleChange = this.handleChange.bind(this);
     this.addTodoItem = this.addTodoItem.bind(this);
     this.clearInputBox = this.clearInputBox.bind(this);
   }

   handleChange(event) {
     this.setState({value: event.target.value});
   }

   addTodoItem(event) {
     this.props.addTodo(this.state.value);
     this.setState({value: ''});
     event.preventDefault();
   }

   clearInputBox(event) {
     this.setState({value: ''});
   }

   render() {
     return (
       <form className="add-todo" onSubmit={this.addTodoItem}>
         <label>
           Add an item:
         </label>
         <input className="add-todo-input-box" type="text" value={this.state.value} onChange={this.handleChange} />
         <div className="add-todo-button">
          <input className="default-button" type="submit" value="Add" />
         </div>
       </form>
     );
   }
 }

 const mapStateToProps = (state) => {
	return { todoItems: state.todoItems };
}

 export default connect(mapStateToProps, { addTodo })(AddTodoItem);
