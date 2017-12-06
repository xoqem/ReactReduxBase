const defaultState = {
  text: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ADD_ITEM_TEXT':
      return {
        ...state,
        text: action.text
      }

    default:
      return state;
  }
};
