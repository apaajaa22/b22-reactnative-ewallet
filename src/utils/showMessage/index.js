import {showMessage, hideMessage} from 'react-native-flash-message';

const toastMessage = (message, type) => {
  showMessage({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#0BCAD4' : '#d63031',
    color: '#fff',
  });
};

export default toastMessage;
