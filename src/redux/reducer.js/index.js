import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import authToken from './auth';
import profile from './profile';
import phone from './phone';
import globalReducer from './global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistAuth = {
  storage: AsyncStorage,
  key: 'authToken',
};

const reducer = combineReducers({
  authToken: persistReducer(persistAuth, authToken),
  globalReducer,
  profile,
  phone,
});

export default reducer;
