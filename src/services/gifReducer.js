export const initialState = {
  url: "https://cdn2.thecatapi.com/images/MTkxNjA2NA.jpg"
};

// While you 'could' keep track of loading and error fields in state,
// createService provides a better option
export const gifReducer = (ACTIONS) => (state = initialState, e = {}) => {
  switch (e.type) {
    case ACTIONS.next.type:
      return { ...state, url: e.payload };
    default:
      return state;
  }
};
