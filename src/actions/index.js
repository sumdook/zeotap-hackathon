import axios from 'axios';
import {DATA_HYDRATE,SEARCH_ADS} from './types';


export const dataHydrate = () => async dispatch =>{
    let data = await axios('https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/data%20(1)4614ba8.json');
    dispatch({type:DATA_HYDRATE,payload:data.data});
}

export const searchAds = (searchText, date) => {
    return {
        type:SEARCH_ADS,
        searchText,date
    }
}