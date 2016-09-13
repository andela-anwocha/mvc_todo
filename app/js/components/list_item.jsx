import React from "react";
import ReactDOM from "react-dom";
import { viewItem } from "../actions/todo_actions.js";

class ListItem extends React.Component {

    constructor(){
      super();
      this._viewItem = this._viewItem.bind(this);
    }

    render(){
      let title = this.props.info.title;
      let description = this.props.info.description;

      return  <li className="collection-item">
                <div className="visible-content">
                  <span className="item-text" ref={element => this.element = element}>{title}</span>
                  <a href="#!" className="secondary-content">
                    <div className="switch">
                      <label>
                        <input type="checkbox" />
                        <span className="lever"></span> Done
                      </label>
                    </div>
                  </a>
                </div>
                <div className="invisible-content">
                  <a className="left-btn btn-flat" onClick={this._viewItem}>
                    View
                  </a>
                  <a className="right-btn btn-flat">
                    Delete
                  </a>
                </div>
              </li>
    }

    componentDidMount(){
      this._attachListener();
    }

    _attachListener(){
      let node = ReactDOM.findDOMNode(this);
      node = $(node).find('span.item-text');
      $(node).click(function(){
        let context =   $(node).closest('.collection-item');
        $('li.collection-item').find('.invisble-content').not(context.find('.invisible-content')).hide();

        context.find('.invisible-content').toggle("slow");
      })
    }

    _viewItem(){
      viewItem(this.props.info);
    }
}

export {ListItem};