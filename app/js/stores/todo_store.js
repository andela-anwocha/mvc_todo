import AppDispatcher from '../dispatcher/app_dispatcher.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
const SEARCH_EVENT = 'search';

let _store = {
  list: [
          {id: 1, title: "Wake the Dog", description: "Dog should wake"},
          {id: 2, title: "Wash the car", description: "Car Clean" }
        ],
  editing: false
};

let _search_list;


class TodoStoreClass extends EventEmitter {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  addSearchListener(cb) {
    this.on(SEARCH_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getList() {
    return _store;
  }

  getSearchList() {
    return _search_list;
  }

}

const TodoStore = new TodoStoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {

    case "NEW_ITEM":
      _store.editing = true;
      TodoStore.emit(CHANGE_EVENT);
      break;

    case "SAVE_ITEM":
      _store.list.push(action.text);
      _store.editing = false;
      TodoStore.emit(CHANGE_EVENT);
      break;

    case "REMOVE_ITEM":
      _store.list = _store.list.filter((item, index) => {
        return index !== action.index;
      });
      TodoStore.emit(CHANGE_EVENT);
      break;

    case "SEARCH_ITEM":
      let pattern = new RegExp(action.text, "ig");
      _search_list = _store.list.filter((item) => { return item.title.match(pattern) } );
      TodoStore.emit(SEARCH_EVENT);
      break;

    default:
      return true;
  }

});

export default TodoStore;
