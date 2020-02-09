import {GET_DATA, SORT_BY_NAME_AZ, SORT_BY_NAME_ZA} from './types'


const initialState ={
    restaurants: [],
};

export default function (state=initialState, action){
    const {type, payload } = action;
    switch(type){
        case GET_DATA:
            // console.log(payload)
            return {...state, restaurants: payload};
        case SORT_BY_NAME_AZ:
            // console.log(payload)
            return {...state, restaurants: payload};
        case SORT_BY_NAME_ZA:
            // console.log(payload)
            return {...state, restaurants: payload};
        default:
            return state;
    }
}