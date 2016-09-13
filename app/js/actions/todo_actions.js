import AppDispatcher from '../dispatcher/app_dispatcher.js';

export function addItem() {
  AppDispatcher.handleViewAction({
    actionType: "NEW_ITEM"
  });
}

export function saveItem(text) {
  AppDispatcher.handleViewAction({
    actionType: "SAVE_ITEM",
    text: text,
  });
}

export function removeItem(index) {
  AppDispatcher.handleViewAction({
    actionType: "REMOVE_ITEM",
    index: index,
  });
}

export function searchItem(text){
  AppDispatcher.handleViewAction({
    actionType: "SEARCH_ITEM",
    text: text
  });
}
