import React from "react";

class AddItemButton extends React.Component {
  render() {
    return <div className="fixed-action-btn horizontal click-to-toggle">
              <a className="btn-floating btn-large red">
                <i className="material-icons">add</i>
              </a>
           </div>
  }
}

export { AddItemButton };