import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import searchReducer from './searchReducer';
export default combineReducers({
	data: dataReducer,
	search: searchReducer
});