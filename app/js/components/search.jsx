import React from "react";

class Search extends React.Component {
  render(){
    return  <div>
              <div className="search-wrapper input-field">
                <input type="text" placeholder="Search TodoList..." />
                <i className="material-icons">search</i>
              </div>
              <div className="horizontal-rule"></div>
            </div>
  }
}

export { Search };
