import React from "react";
import CardTextContent from "./card_text_content.jsx";
import CardEditAction from "./card_edit_action.jsx";
import CardSaveAction from "./card_save_action.jsx";
import CardEditContent from "./card_edit_content.jsx";

class ItemContent extends React.Component {
  constructor(){
    super();
    this.state = {
      currentView: "Edit"
    };
  }

  render() {
    if (this.state.currentView == "Save"){
      return  (<div className="card">
               <CardEditContent />
               <CardSaveAction changeState={this._editState.bind(this)} />
              </div>);
    }
    return (<div className="card">
              <CardTextContent />
              <CardEditAction changeState={this._saveState.bind(this)} />
            </div>);
  }

  _saveState(){
    this.setState({currentView: "Save"});
  }

  _editState(){
    this.setState({currentView: "Edit"});
  }
}

export { ItemContent };