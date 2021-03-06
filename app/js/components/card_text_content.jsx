import React from "react";

export default class CardTextContent extends React.Component {
  constructor(){
    super();
    let defaultInfo = { 
      title: "Please Select List Item to View",
      description: "No List Item Selected"
    }

    //let info = this.props.info.title ? this.props.info : defaultInfo;
    this.state = {
      info: defaultInfo
    };
  }

  render(){
    let info = this.props.info.title ? this.props.info : this.state.info;
    let title = info.title;
    let description = info.description;

    return <div className="card-content white-text">
              <span className="card-title">{title}</span>
              <p>{description}</p>
           </div>
  }
}
