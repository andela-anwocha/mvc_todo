import React from "react";
import CardTextContent from "./card_text_content.jsx";
import CardEditAction from "./card_edit_action.jsx";
import CardSaveAction from "./card_save_action.jsx";
import CardEditContent from "./card_edit_content.jsx";
import TodoStore from "../stores/todo_store.js";

class ItemContent extends React.Component {
  constructor(){
    super();
    this.state = {
      info: {},
      currentView: "Edit"
    };

    this._viewItem = this._viewItem.bind(this);
  }

  render() {
    if (this.state.currentView == "Save"){
      return  (<div className="card">
               <CardEditContent info={this.state.info} />
               <CardSaveAction changeState={this._editState.bind(this)} info={this.state.info} />
              </div>);
    }
    return (<div className="card">
              <CardTextContent info={this.state.info} />
              <CardEditAction info={this.state.info} changeState={this._saveState.bind(this)} />
            </div>);
  }

  componentDidMount(){
    TodoStore.addViewListener(this._viewItem);
    TodoStore.addChangeListener(this._viewItem);
  }

  _viewItem(){
    this.setState({
      info: TodoStore.getListItem(),
      currentView: "Edit"
    });
  }

  _saveState(){
    this.setState({currentView: "Save"});
  }

  _editState(){
    this.setState({currentView: "Edit"});
  }
}

export { ItemContent };