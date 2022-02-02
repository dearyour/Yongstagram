const initialState = {
  identification: {
    version: '0.0.1'
  },
  service: {
    nicknames: []
  }
};
const config = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@config/UPDATE_NICKNAMES':
      return {
        ...state,
        service: {
          ...state.service,
          nicknames: [...payload]
        }
      };
    default:
      return state;
  }
};
export default config;
