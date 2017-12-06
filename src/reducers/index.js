import addItem from 'reducers/addItem';
import { combineReducers } from 'redux';
import items from 'reducers/items';

export default combineReducers({
  addItem,
  items
});
