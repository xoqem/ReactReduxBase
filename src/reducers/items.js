const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return [
        ...state,
        action.text
      ];
    }

    case 'DELETE_ITEM_AT_INDEX': {
      const { index } = action;
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }

    default: {
      return state;
    }
  }
};
