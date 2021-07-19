const initStateGlobal = {
  phone: '',
};

const phone = (state = initStateGlobal, action) => {
  switch (action.type) {
    case 'SET_PHONE':
      return {
        ...state,
        phone: action.payload,
      };
    default:
      return state;
  }
};

export default phone;
