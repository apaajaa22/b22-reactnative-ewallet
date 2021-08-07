import {http} from '../../helpers/http';
import {API_URL} from '@env';
import toastMessage from '../../utils/showMessage';

export const SignIn = (data, navigation) => {
  return async dispatch => {
    const form = new URLSearchParams();
    if (!data.email.includes('@')) {
      toastMessage('Invalid email format');
    } else if (data.password.length < 6) {
      toastMessage('minimum password length must be 6 at least');
    } else if (data.password.length > 12) {
      toastMessage('maximum password length is 12');
    } else {
      form.append('email', data.email);
      form.append('password', data.password);
      dispatch({type: 'SET_LOADING', payload: true});
      try {
        const {data: newData} = await http().post(
          `${API_URL}/users/login`,
          form,
        );
        dispatch({type: 'GET_TOKEN', payload: newData.token});
        dispatch({type: 'SET_LOADING', payload: false});
        if (newData.success === true) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
          toastMessage(newData.message, 'success');
        } else {
          toastMessage(newData.message);
          dispatch({type: 'SET_LOADING', payload: false});
        }
      } catch (error) {
        dispatch({type: 'SET_LOADING', payload: false});
        toastMessage(error.response.data.message);
      }
    }
  };
};

export const SignUp = (data, navigation) => {
  return async dispatch => {
    const form = new URLSearchParams();
    if (!data.email.includes('@')) {
      toastMessage('Invalid email format');
    } else if (!data.phone.startsWith('08')) {
      toastMessage('phone number must start with 08');
    } else if (data.phone.length < 10) {
      toastMessage('minimum phone number length must be 10 at least');
    } else if (data.phone.length > 12) {
      toastMessage('maximum phone number length is 12');
    } else if (data.password.length < 6) {
      toastMessage('minimum password length must be 6 at least');
    } else if (data.password.length > 12) {
      toastMessage('maximum password length must be 12');
    } else {
      form.append('email', data.email);
      form.append('phone', data.phone);
      form.append('password', data.password);
      console.log(data);
      dispatch({type: 'SET_LOADING', payload: true});
      try {
        const {data: newData} = await http().post(
          `${API_URL}/users/register`,
          form,
        );
        dispatch({type: 'SET_LOADING', payload: false});
        if (newData.success === true) {
          toastMessage(newData.message, 'success');
          navigation.navigate('Login');
        } else {
          toastMessage(newData.message);
        }
      } catch (error) {
        dispatch({type: 'SET_LOADING', payload: false});
        toastMessage(error.response.data.message);
      }
    }
  };
};

export const registerToken = (authToken, notifToken) => {
  return async dispatch => {
    const form = new URLSearchParams({token: notifToken});
    if (authToken) {
      const {data} = await http(authToken).post(
        `${API_URL}/users/registerToken`,
        form,
      );
    }
    dispatch({type: 'AUTH_REGISTER_TOKEN', payload: notifToken});
  };
};
