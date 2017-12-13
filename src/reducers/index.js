import addItem from 'reducers/addItem';
import { combineReducers } from 'redux';
import i18n from 'reducers/i18n';
import items from 'reducers/items';
import theme from 'reducers/theme';

export default combineReducers({
  addItem,
  i18n,
  items,
  theme
});
