import React from "react";
import CardTextContent from "./card_text_content.jsx";
import CardEditAction from "./card_edit_action.jsx";
import CardSaveAction from "./card_save_action.jsx";
import CardEditContent from "./card_edit_content.jsx";

class ItemContent extends React.Component {
  render() {
    return  <div className="card">
               <CardEditContent/>
               <CardSaveAction />
            </div>
  }
}

export { ItemContent };