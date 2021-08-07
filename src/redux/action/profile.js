import {http} from '../../helpers/http';
import {API_URL} from '@env';
import toastMessage from '../../utils/showMessage';

export const getProfile = token => {
  return async dispatch => {
    const {data} = await http(token).get(`${API_URL}/users`);
    dispatch({type: 'SET_PROFILE', payload: data.results});
  };
};

export const getHistory = token => {
  return async dispatch => {
    const {data} = await http(token).get(`${API_URL}/transaction`);
    dispatch({type: 'SET_HISTORY', payload: data.results});
  };
};

export const updatePhone = (token, phone) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('phone', phone);
    try {
      if (!phone.startsWith('08')) {
        toastMessage('phone number must start with 08');
      } else if (phone.length < 10) {
        toastMessage('minimum phone number length must be 10 at least');
      } else if (phone.length > 12) {
        toastMessage('maximum phone number length is 12');
      } else {
        dispatch({type: 'SET_LOADING', payload: true});
        const {data} = await http(token).patch(`${API_URL}/users`, form);
        dispatch(getProfile(token));
        dispatch({type: 'SET_LOADING', payload: false});
        toastMessage('Update profile success', 'success');
      }
    } catch (error) {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage('Update profile failed');
    }
  };
};

export const updateEmail = (token, email) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('email', email);
    try {
      if (!email.includes('@')) {
        toastMessage('Invalid email format');
      } else {
        dispatch({type: 'SET_LOADING', payload: true});
        const {data} = await http(token).patch(`${API_URL}/users`, form);
        dispatch(getProfile(token));
        dispatch({type: 'SET_LOADING', payload: false});
        toastMessage('Update profile success', 'success');
      }
    } catch (error) {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage(error.response.data.message);
    }
  };
};

export const updateNameAndPhoto = (token, name, photo) => {
  return async dispatch => {
    const form = new FormData();
    dispatch({type: 'SET_LOADING', payload: true});
    if (photo) {
      form.append('picture', photo);
      const {data} = await http(token).patch(`${API_URL}/users`, form);
      dispatch(getProfile(token));
      dispatch({type: 'SET_LOADING', payload: false});
    }
    try {
      if (name.length < 4) {
        toastMessage('minimal name must be 4 characters at least');
      } else if (name.length > 16) {
        toastMessage('maximal name is 16 characters');
      } else {
        form.append('name', name);
        const {data} = await http(token).patch(`${API_URL}/users`, form);
        dispatch(getProfile(token));
        dispatch({type: 'SET_LOADING', payload: false});
        toastMessage('Update profile success', 'success');
      }
    } catch (error) {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage('Update profile failed');
    }
  };
};
