import addItem from 'reducers/addItem';
import { combineReducers } from 'redux';
import items from 'reducers/items';
import theme from 'reducers/theme';

export default combineReducers({
  addItem,
  items,
  theme
});
