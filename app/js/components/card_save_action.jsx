import React from "react";

export default class CardSaveAction extends React.Component {
  render(){
    return <div className="card-action">
              <a href="#" onClick={this._changeState.bind(this)}>Discard</a>
              <a href="#">Save</a>
            </div>
  }

  _changeState(){
    this.props.changeState();
  }
}
