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
      dispatch({type: 'SET_LOADING', payload: true});
      const {data} = await http(token).patch(`${API_URL}/users`, form);
      dispatch(getProfile(token));
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage('Update profile success', 'success');
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
      dispatch({type: 'SET_LOADING', payload: true});
      const {data} = await http(token).patch(`${API_URL}/users`, form);
      dispatch(getProfile(token));
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage('Update profile success', 'success');
    } catch (error) {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage('Update profile failed');
    }
  };
};

export const updateNameAndPhoto = (token, name, photo) => {
  return async dispatch => {
    const form = new FormData();
    if (photo) {
      form.append('picture', photo);
      dispatch({type: 'SET_LOADING', payload: true});
      const {data} = await http(token).patch(`${API_URL}/users`, form);
      dispatch(getProfile(token));
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage('Update profile success', 'success');
    }
    form.append('name', name);
    try {
      dispatch({type: 'SET_LOADING', payload: true});
      const {data} = await http(token).patch(`${API_URL}/users`, form);
      dispatch(getProfile(token));
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage('Update profile success', 'success');
    } catch (error) {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage('Update profile failed');
    }
  };
};
