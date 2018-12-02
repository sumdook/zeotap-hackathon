import {SEARCH_ADS} from '../actions/types';

export default function(state = {searchText:null,date:null}, action){
	switch(action.type){
		case SEARCH_ADS:
			const {searchText,date} = action;
			return {...state,searchText,date};
		default:
			return state;
	}
}