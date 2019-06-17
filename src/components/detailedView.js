import React from 'react';
import { connect } from 'react-redux';
import { hideDetailedView, editTodoItem } from '../actions';

class DetailedView extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.editItem = this.editItem.bind(this);
    this.closeDetailedView = this.closeDetailedView.bind(this);
  }

  closeDetailedView() {
    this.props.hideDetailedView();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  editItem(event) {
    this.props.editTodoItem({
      id: this.props.currentItem.id,
      message: this.state.value
    });
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <div className={"overlay-dialog " + (this.props.showDetail? "showDetails": "hideDetails")}>
        <div>Edit Item </div>
        <div className="detail-text">
          <div>Original: {this.props.currentItem.message}</div>
          <form className="edit-todo" onSubmit={this.editItem}>
            <label>
              New:
            </label>
            <input className="add-todo-input-box" type="text" value={this.state.value} onChange={this.handleChange} />
            <input className="default-button" type="submit" value="Edit" />
          </form>
        </div>
        <button className="default-button" onClick={() => this.closeDetailedView()}>Close</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentItem: state.currentItem, showDetail: state.showDetail};
}


export default connect(mapStateToProps, { hideDetailedView, editTodoItem })(DetailedView);
