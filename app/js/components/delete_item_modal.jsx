import React from "react";

export default class DeleteItemModal extends React.Component {
  render(){
    return <div id="modal2" className="modal">
              <div className="modal-content">
                <h4>Delete</h4>
                <p>Are you sure you want to delete this item?</p>
              </div>
              <div className="modal-footer delete">
                <a href="#!" className=" modal-action modal-close btn">Yes</a>
              </div>
           </div>
  }
}
