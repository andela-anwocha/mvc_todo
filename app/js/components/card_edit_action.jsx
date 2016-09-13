import React from "react";
import { addItem } from "../actions/todo_actions.js";

export default class CardEditAction extends React.Component {
  render(){
    let cardActions = this._getCardActions();
    return  <div className="card-action">
              {cardActions}
            </div>
  }

  _getCardActions(){
    let info = this.props.info.title != undefined;

    if(info){
      let index = 1;
      return ['Delete', 'Edit'].map(action => {
        index += 1;
        if(action == 'Edit'){
          return <a href="#" onClick={this._changeState.bind(this)} key={index}>Edit</a>
        }
        else{
          return <a href="#" key={index}>Delete</a>
        }
      });
    }
    return <div></div>;
  }

  _changeState(){
    this.props.changeState();
  }

  _removeItem(){
    removeItem();
  }

}
