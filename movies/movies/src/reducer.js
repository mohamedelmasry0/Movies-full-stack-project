export const initialState = {
  seen: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SEEN":
      return {
        ...state,
        seen: [...state.seen, action.item],
      };
    case "UNSEEN":
      const index = state.seen.findIndex(
        (seenItem) => seenItem.title === action.title
      );
      let newSeen = [...state.seen];

      if (index >= 0) {
        newSeen.splice(index, 1);
      }

      return {
        ...state,
        seen: newSeen,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
