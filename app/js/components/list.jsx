import React from "react";
import { ListItem } from "./list_item.jsx";
import { Search } from "./search.jsx";
import { BlankListItem } from "./blank_list_item.jsx";

class List extends React.Component {
  render () {
    return  <div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Todo List</h4>
                </li>

                <Search />
                <BlankListItem />

              </ul>
            </div>
  }
}

export { List };