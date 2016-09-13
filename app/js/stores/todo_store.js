import AppDispatcher from '../dispatcher/app_dispatcher.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
const SEARCH_EVENT = 'search';
const VIEW_EVENT = 'view';

let _store = {
  list: [
          { id: 1, title: "Wake the Dog", description: "Dog should wake", done: true },
          { id: 2, title: "Wash the car", description: "Car Clean", done: false }
        ],
  editing: false
};

let _search_list;
let _list_item;
let _temp_list_item;

class TodoStoreClass extends EventEmitter {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  addSearchListener(cb) {
    this.on(SEARCH_EVENT, cb);
  }

  addViewListener(cb) {
    this.on(VIEW_EVENT, cb);
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

  getListItem(){
    return _list_item;
  }

  setTempItem(item){
    _temp_list_item = item;
  }

}

const TodoStore = new TodoStoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;
  switch (action.actionType) {

    case "NEW_ITEM":
      console.log(action.item);
      _store.list = _store.list.concat([action.item]);
      TodoStore.emit(CHANGE_EVENT);
      break;

    case "UPDATE_ITEM":
      if ((_temp_list_item != undefined) && (action.index == _temp_list_item.id)){
        _store.list[action.index - 1] = _temp_list_item;
        _list_item = _temp_list_item;
        TodoStore.emit(CHANGE_EVENT);
      }
      break;

    case "VIEW_ITEM":
      _list_item = action.info;
      TodoStore.emit(VIEW_EVENT);
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
