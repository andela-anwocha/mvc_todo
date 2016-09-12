import React from 'react';
import { render } from 'react-dom';
import { List } from "./list.jsx";
import { AddItemButton } from "./add_item_button.jsx";
import { ItemContent } from "./item_content.jsx";

render(<List/>, document.getElementById('container'));
render(<AddItemButton />, document.getElementById('add-container'));
render(<ItemContent />, document.getElementById('item-content'));
