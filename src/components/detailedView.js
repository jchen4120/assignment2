import React from 'react';
import { connect } from 'react-redux';
import { hideDetailedView } from '../actions';

class DetailedView extends React.Component {
  constructor() {
    super();
    this.closeDetailedView = this.closeDetailedView.bind(this);
  }

  closeDetailedView() {
    this.props.hideDetailedView("");
  }

  render() {
    return (
      <div className={"overlay-dialog " + (this.props.message.showDetail? "showDetails": "hideDetails")}>
        <button className="default-button" onClick={() => this.closeDetailedView()}>Close</button>
        <div className="detail-text">
          YAY you finished:
          <div>{this.props.message.message}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {message: state.message};
}


export default connect(mapStateToProps, { hideDetailedView })(DetailedView);
