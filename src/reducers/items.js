const defaultState = [];

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.text
      ];

    case 'DELETE_ITEM_AT_INDEX':
      let newState = state.concat();
      newState.splice(action.index, 1);
      return newState;

    default:
      return state;
  }
};
