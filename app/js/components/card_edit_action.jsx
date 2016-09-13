import React from "react";
import { addItem } from "../actions/todo_actions.js";

export default class CardEditAction extends React.Component {

  constructor(){
    super();
    this._changeState = this._changeState.bind(this);
    this._deleteItem = this._deleteItem.bind(this);
  }

  render(){
    let cardActions = this._getCardActions();
    return  <div className="card-action">
              {cardActions}
            </div>
  }

  _getCardActions(){
    let info = this.props.info.title != undefined;

    if(info){
      let index = 0;
      return ['Delete', 'Edit'].map(action => {
        index += 1;
        if(action == 'Edit'){
          return <a href="#" onClick={this._changeState} key={index}>Edit</a>
        }
        else{
          return <a href="#" key={index} onClick={this._deleteItem}>Delete</a>
        }
      });
    }
    return <div></div>;
  }

  _deleteItem(){
    $('#modal2').openModal();
  }

  _changeState(){
    this.props.changeState();
  }

  _removeItem(){
    removeItem();
  }

}
