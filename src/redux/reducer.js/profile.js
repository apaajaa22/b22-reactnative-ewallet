const initPhoto = {
  uri: '',
  type: '',
  name: '',
  isUpload: false,
  profile: {},
  history: [],
};

const profile = (state = initPhoto, action) => {
  switch (action.type) {
    case 'SET_PHOTO':
      return {
        ...state,
        uri: action.payload.uri,
        type: action.payload.type,
        name: action.payload.name,
      };
    case 'SET_UPLOAD_STATUS':
      return {
        ...state,
        isUpload: action.payload,
      };
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };
    case 'SET_HISTORY':
      return {
        ...state,
        history: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default profile;
