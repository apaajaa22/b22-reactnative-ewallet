import {http} from '../../helpers/http';
import {API_URL} from '@env';
import toastMessage from '../../utils/showMessage';
import {getProfile} from './profile';
import PushNotification from 'react-native-push-notification';

export const transfer = (token, formData, navigation) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('phoneRecipient', formData.phone);
    form.append('deductedBalance', formData.balance);
    form.append('trxFee', formData.trxFee);
    dispatch({type: 'SET_LOADING', payload: true});
    try {
      const {data} = await http(token).post(`${API_URL}/transfer`, form);
      toastMessage(data.message, 'success');
      dispatch({type: 'SET_LOADING', payload: false});
      dispatch(getProfile(token));
      navigation.navigate('Home');
      PushNotification.localNotification({
        channelId: 'general',
        title: 'OVO',
        message: `berhasil transfer balance sebesar ${data.results.deductedBalance}`,
      });
    } catch (error) {
      dispatch({type: 'SET_LOADING', payload: false});
      toastMessage(error.response.data.message);
      console.log(error.response.data);
    }
  };
};
