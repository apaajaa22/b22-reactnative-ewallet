const initStateGlobal = {
  isError: false,
  message: 'Error',
  isLoading: false,
};

const globalReducer = (state = initStateGlobal, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.payload.isError,
        message: action.payload.message,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
