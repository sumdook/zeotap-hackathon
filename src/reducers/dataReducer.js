import {DATA_HYDRATE} from '../actions/types';

export default function(state = {}, action){
	switch(action.type){
		case DATA_HYDRATE:
			return action.payload; 
		default:
			return state;
	}
}