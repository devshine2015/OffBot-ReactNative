/**
 * Author: Moses Adekunle Esan for E&M Digital
 * Date: 7/27/2017
 * Project: How to Build a React Native/Redux app using a JWT-Powered API.
 */

'use strict';

var React = require('react-native');
var { AsyncStorage } = React;

import { combineReducers } from 'redux';

import { Actions } from 'react-native-router-flux';

import { LOGIN_SUCCESS, LOGGED_IN, LOGGED_OUT, OFFERLIST,FETCHING_offer_REQUEST,FETCHING_offer_SUCCESS,FECTHING_offer_FAILURE} from "./actions/Types"

let userState = { 
    loggedIn: false,
    offerList:'',
    isFetching: false,
    errorMessage: '',
    offer: []
};

const authReducer = (state = userState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            AsyncStorage.setItem('token', action.token); //save the token
            Actions.offerlist();
            return state.merge({loggedIn: true,offerList:''});
        case OFFERLIST:
            // state= Object.assign({}, state, {loggedIn: true,offerList:action.data});
            // console.log('respond:',state);
            return state.merge({loggedIn: true,offerList:action.data});
        case LOGGED_IN:
            state = Object.assign({}, state, {loggedIn:true});
            return state;

        case LOGGED_OUT:
            state = Object.assign({}, state, {loggedIn:false});
            AsyncStorage.removeItem('token'); //clear token on device
            Actions.welcome();
            return state;

        case FETCHING_offer_REQUEST:
            state = Object.assign({}, state, {isFetching: true})
            return state;

        case FECTHING_offer_FAILURE:
            state = Object.assign({}, state, {isFetching: false, errorMessag:action.payload}) 
            return state;

        case FETCHING_offer_SUCCESS:
            state = Object.assign({}, state, {isFetching: false, offer: action.payload});
            return state;
            
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({ authReducer })

export default rootReducer;