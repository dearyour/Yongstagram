const initialState = {
  isHeaderOpen: false
};
const layouts = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@layouts/UPDATE_HEADER_STATE':
      return {
        ...state,
        isHeaderOpen: payload
      };
    default:
      return state;
  }
};
export default layouts;
