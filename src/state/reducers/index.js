import amountReducer from './amountReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  amount: amountReducer,
});

export default rootReducer;
