const initialState = {
  token: null,
};

const authToken = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authToken;
