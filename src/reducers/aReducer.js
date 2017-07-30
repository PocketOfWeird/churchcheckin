const aReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_STATE":
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default aReducer;
