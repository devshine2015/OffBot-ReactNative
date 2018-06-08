import {
    FETCHING_OFFER_REQUEST,
    FETCHING_OFFER_SUCCESS,
    FECTHING_OFFER_FAILURE,
    FETCHING_LOGIN_REQUEST,
    FETCHING_LOGIN_SUCCESS,
    FETCHING_LOGIN_FAILURE,
    FETCHING_SIGNUP_REQUEST,
    FETCHING_SIGNUP_SUCCESS,
    FETCHING_SIGNUP_FAILURE,
    FETCHING_CATEGORY_REQUEST,
    FETCHING_CATEGORY_SUCCESS,
    FETCHING_CATEGORY_FAILURE,
    FETCHING_OFFERBYCATEGORY_REQUEST,
    FETCHING_OFFERBYCATEGORY_SUCCESS,
    FETCHING_OFFERBYCATEGORY_FAILURE,
    FETCHING_SEARCH_REQUEST,
    FETCHING_SEARCH_SUCCESS,
    FETCHING_SEARCH_FAILURE
    
} from './types';
import {AsyncStorage} from 'react-native';
const REQUEST_URL = "https://offerbotapp.herokuapp.com";
// offer list
export const fetchingOfferRequest = () => ({ type: FETCHING_OFFER_REQUEST});
export const fetchingOfferSuccess = json => ({
    type: FETCHING_OFFER_SUCCESS,
    payload: json
});
export const fetchingOfferFailure = error => ({
    type: FECTHING_OFFER_FAILURE,
    payload: error
});
export const fetchOffer = () => {
    return async dispatch => {
        dispatch(fetchingOfferRequest());
        // setTimeout(() => {dispatch(fetchingOfferRequest());},8000);
        try{

            const value =await AsyncStorage.getItem('token');
            console.log('mytoken:',value);
            let requestConfig = {
                            method: "GET",
                            headers: { 'Authorization': 'Bearer ' + value }
                        };
            
                        let  url=REQUEST_URL + '/api/Offers';
                        let respond = await fetch(url, requestConfig);
                        let json = await respond.json();
                        dispatch(fetchingOfferSuccess(json));
           
        }
        catch (error) {
            dispatch(fetchingOfferFailure(error));
        }
    }
}

// offer  by category

export const fetchingOfferByCategoryRequest = () => ({ type: FETCHING_OFFER_REQUEST});
export const fetchingOfferByCategorySuccess = json => ({
    type: FETCHING_OFFER_SUCCESS,
    payload: json
});
export const fetchingOfferByCategoryFailure = error => ({
    type: FECTHING_OFFER_FAILURE,
    payload: error
});
export const fetchOfferByCategory = (data) => {
    return async dispatch => {
        dispatch(fetchingOfferByCategoryRequest());
        // setTimeout(() => {dispatch(fetchingOfferRequest());},8000);
        try{

            const value =await AsyncStorage.getItem('token');
            console.log('mytoken:',value);
            let requestConfig = {
                            method: "GET",
                            headers: { 'Authorization': 'Bearer ' + value }
                        };
            
                        let  url=REQUEST_URL + '/api/Categories/'+data+'/offers';
                        let respond = await fetch(url, requestConfig);
                        let json = await respond.json();
                        dispatch(fetchingOfferByCategorySuccess(json));
           
        }
        catch (error) {
            dispatch(fetchingOfferByCategoryFailure(error));
        }
    }
}
// get search result



export const fetchingSearchRequest = () => ({ type: FETCHING_SEARCH_REQUEST});
export const fetchingSearchSuccess = json => ({
    type: FETCHING_SEARCH_SUCCESS,
    payload: json
});
export const fetchingSearchFailure = error => ({
    type: FETCHING_SEARCH_FAILURE,
    payload: error
});
export const fetchSearch = (data) => {
    return async dispatch => {
        dispatch(fetchingSearchRequest());
        // setTimeout(() => {dispatch(fetchingOfferRequest());},8000);
        try{

            const value =await AsyncStorage.getItem('token');
            console.log('mytoken:',value);
            let requestConfig = {
                            method: "GET",
                            headers: { 'Authorization': 'Bearer ' + value }
                        };
            
                        let  url=REQUEST_URL + '/api/Offers/search/'+data;
                        let respond = await fetch(url, requestConfig);
                        let json = await respond.json();
                        dispatch(fetchingSearchSuccess(json));
           
        }
        catch (error) {
            dispatch(fetchingSearchFailure(error));
        }
    }
}



//get offer categories


export const fetchingCategoryRequest = () => ({ type: FETCHING_CATEGORY_REQUEST});
export const fetchingCategorySuccess = json => ({
    type: FETCHING_CATEGORY_SUCCESS,
    payload: json
});
export const fetchingCategoryFailure = error => ({
    type: FECTHING_CATEGORY_FAILURE,
    payload: error
});
export const fetchCategory = () => {
    return async dispatch => {
        dispatch(fetchingCategoryRequest());
        // setTimeout(() => {dispatch(fetchingOfferRequest());},8000);
        try{

            const value =await AsyncStorage.getItem('token');
            console.log('mytoken:',value);
            let requestConfig = {
                            method: "GET",
                            headers: { 'Authorization': 'Bearer ' + value }
                        };
            
                        let  url=REQUEST_URL + '/api/Categories';
                        let respond = await fetch(url, requestConfig);
                        let json = await respond.json();
                        dispatch(fetchingCategorySuccess(json));
           
        }
        catch (error) {
            dispatch(fetchingCategoryFailure(error));
        }
    }
}

//user login

export const fetchingLoginRequest = () => ({ type: FETCHING_LOGIN_REQUEST});
export const fetchingLoginSuccess = json => ({
    
    type: FETCHING_LOGIN_SUCCESS,
    payload: json
});
export const fetchingLoginFailure = error => ({
    type: FETCHING_LOGIN_FAILURE,
    payload: error
});
export const fetchLogin = (data) => {
    return async dispatch => {
        dispatch(fetchingLoginRequest());
        
        try{

            // const value =await AsyncStorage.getItem('token');
            // console.log('mytoken:',value);
            let requestConfig = {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            
            let url=REQUEST_URL + '/login';
            let respond = await fetch(url, requestConfig);
            let json = await respond.json();
            dispatch(fetchingLoginSuccess(json));
            dispatch(fetchOffer());
            dispatch(fetchCategory());
       
        }
        catch (error) {
            dispatch(fetchingLoginFailure(error));
        }
    }
}

//off user register
export const fetchingSignupRequest = () => ({ type: FETCHING_SIGNUP_REQUEST});
export const fetchingSignupSuccess = json => ({
    
    type: FETCHING_SIGNUP_SUCCESS,
    payload: json
});
export const fetchingSignupFailure = error => ({
    type: FETCHING_SIGNUP_FAILURE,
    payload: error
});
export const fetchSignup = (data) => {
    return async dispatch => {
        dispatch(fetchingLoginRequest());
        
        try{

            // const value =await AsyncStorage.getItem('token');
            // console.log('mytoken:',value);
            let requestConfig = {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            
            let url=REQUEST_URL + '/signup';
            let respond = await fetch(url, requestConfig);
            let json = await respond.json();
            dispatch(fetchingSignupSuccess(json));
           
       
        }
        catch (error) {
            dispatch(fetchingSignupFailure(error));
        }
    }
}

