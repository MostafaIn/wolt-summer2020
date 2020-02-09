import {GET_DATA, SORT_BY_NAME_AZ, SORT_BY_NAME_ZA} from './types'

import restaurantsData from '../data/restaurants.json'

export const getData = () => dispatch =>{
    dispatch({
        type: GET_DATA,
        payload: restaurantsData.restaurants
    })
}

export const sortByNameAZ = (data) => dispatch =>{
            let sorted = data.sort((a,b) =>{
                if(a.name < b.name){
                    return -1
                }else{
                    return 1
                }
                
            })
            dispatch({
                type: SORT_BY_NAME_AZ,
                payload: sorted    
            })

            
  };

export const sortByNameZA = (data) => dispatch =>{
    let reversed = data.reverse((a,b) =>{
        if(a.name < b.name){
            return -1
        }else{
            return 1
        }
    })
    dispatch({
        type: SORT_BY_NAME_ZA,
        payload: reversed    
    })
} 
