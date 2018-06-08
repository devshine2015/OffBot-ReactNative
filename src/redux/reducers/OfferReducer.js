import {
    FETCHING_OFFER_REQUEST,
    FETCHING_OFFER_SUCCESS,
    FETCTHING_OFFER_FAILURE,
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
} from '../actions/types';
import { combineReducers } from 'redux';
import {AsyncStorage} from 'react-native';
const initialState = {
    isFetching: false,
    errorMessage: '',
    isloginFetching: false,
    issignupFetching: false,
    isloadingbycategory:false,
    offer: [],
    category:[]
};
import {Actions} from 'react-native-router-flux';
const OfferReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCHING_OFFER_REQUEST:
            state = Object.assign({}, state, {isFetching: true})
            return state;
        case FETCTHING_OFFER_FAILURE:
            state = Object.assign({}, state, {isFetching: false, errorMessag:action.payload}) 
            return state;
        case FETCHING_OFFER_SUCCESS:
            state = Object.assign({}, state, {isFetching: false, offer: action.payload});
            return state;
        case FETCHING_OFFERBYCATEGORY_REQUEST:
            state = Object.assign({}, state, {isFetching: true,isloadingbycategory: true})
            return state;
        case FETCHING_OFFERBYCATEGORY_FAILURE:
            state = Object.assign({}, state, {isFetching: false, errorMessag:action.payload}) 
            return state;
        case FETCHING_OFFERBYCATEGORY_SUCCESS:
            state = Object.assign({}, state, {isFetching: false, offer: action.payload});
            return state;
        case FETCHING_SEARCH_REQUEST:
            state = Object.assign({}, state, {isFetching: true,isloadingbycategory: true})
            return state;
        case FETCHING_SEARCH_FAILURE:
            state = Object.assign({}, state, {isFetching: false, errorMessag:action.payload}) 
            return state;
        case FETCHING_SEARCH_SUCCESS:
            state = Object.assign({}, state, {isFetching: false, offer: action.payload.result});
            return state;        
        case FETCHING_CATEGORY_REQUEST:
            state = Object.assign({}, state, {isFetching: true})
            return state;
        case FETCHING_CATEGORY_FAILURE:
            state = Object.assign({}, state, {isFetching: false, errorMessag:action.payload}) 
            return state;
        case FETCHING_CATEGORY_SUCCESS:
            state = Object.assign({}, state, {isFetching: false, category: action.payload});
            return state;    
        case FETCHING_LOGIN_REQUEST:
            state = Object.assign({}, state, {isloginFetching: true})
            return state;
        case FETCHING_LOGIN_FAILURE:
            console.log('respond:',action.payload)
            state = Object.assign({}, state, {isloginFetching: false, errorMessag:action.payload}) 
            return state;
        case FETCHING_LOGIN_SUCCESS:
            AsyncStorage.setItem('token', action.payload.accessToken);
            state = Object.assign({}, state, {isloginFetching: false});
             //save the token
            Actions.offerlist();
            console.log('respond:',action.payload.accessToken)
            return state;
        case FETCHING_SIGNUP_REQUEST:
            state = Object.assign({}, state, {issignupFetching: true})
            return state;
        case FETCHING_SIGNUP_FAILURE:
            console.log('respond:',action.payload)
            state = Object.assign({}, state, {issignupFetching: false, errorMessag:action.payload}) 
            return state;
        case FETCHING_SIGNUP_SUCCESS:
            state = Object.assign({}, state, {issignupFetching: false,isloginFetching: false});
             //save the token
            Actions.login();
            return state;        
        default:
            return state;        
    }
};
const rootReducer = combineReducers({ OfferReducer });

export default rootReducer;