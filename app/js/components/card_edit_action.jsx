import React from "react";
import { addItem } from "../actions/todo_actions.js";

export default class CardEditAction extends React.Component {
  render(){
    return  <div className="card-action">
              <a href="#">Delete</a>
              <a href="#" onClick={this._changeState.bind(this)}>Edit</a>
            </div>
  }

  _changeState(){
    this.props.changeState();
  }

  _removeItem(){
    removeItem();
  }

}
