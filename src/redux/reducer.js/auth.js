const initialState = {
  token: null,
  notifToken: null,
};

const authToken = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'REGISTER_TOKEN':
      return {
        ...state,
        notifToken: action.payload,
      };
    default:
      return state;
  }
};

export default authToken;
