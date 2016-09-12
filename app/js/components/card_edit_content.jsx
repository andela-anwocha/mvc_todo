import React from "react";

export default class CardEditContent extends React.Component {
  render(){
    return  <div className="card-edit-content white-text">
              <span className="card-title">Editing Card Title</span>
              <textarea className="materialize-textarea"></textarea>
            </div>
  }
}
