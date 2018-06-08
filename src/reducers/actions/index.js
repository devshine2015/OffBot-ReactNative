/**
 * Author: Moses Adekunle Esan for E&M Digital
 * Date: 7/27/2017
 * Project: How to Build a React Native/Redux app using a JWT-Powered API.
 */

'use strict';

var { NetInfo, Alert } = require('react-native');

import {LOGIN_SUCCESS, LOGGED_IN, LOGGED_OUT,OFFERLIST,FETCHING_offer_REQUEST,FETCHING_offer_SUCCESS,FECTHING_offer_FAILURE} from "./Types";
import { NETWORK_ERROR, SERVER_ERROR, ERROR, NETWORK_MSG, SERVER_MSG} from "../../config/config";
import api from '../../api/index';

NetInfo.isConnected.addEventListener('change', () => {});

//Register
export function register(data, callback) {
    return (dispatch) => {
        checkNetworkConnection(function () {
            api.register(data, function (success, data, error) {
                if (success) dispatch({type: LOGIN_SUCCESS, token: data.token});
                else if (error) showError(error, callback)
            });
        })
    };
}

//Login
export function login(data, callback) {
    return (dispatch) => {
        checkNetworkConnection(function () {
            api.login(data, function (success, data, error) {
                if (success) dispatch({type: LOGIN_SUCCESS, token: data.accessToken});
                else if (error) showError(error, callback)
            });
        })
    };
}

//Logout
export function logout() {
    return (dispatch) => {
        checkNetworkConnection(function () {
            api.logout(function (success, error) {
                if (success) dispatch({type: LOGGED_OUT});
                else alert("Failed to log out. Please try again" + error);
            });
        })
    };
}
//offerlist

export function offer_list(callback) {
    return (dispatch) => {
        checkNetworkConnection(function () {
            api.getofferlist(function (success, data, error) {
                
                if (success) dispatch({type: OFFERLIST, data: data});
                else if (error) showError(error, callback)
            });
        })
    };
}
//Recover Password
export function recover(data, callback) {
    return (dispatch) => {
        checkNetworkConnection(function () {
            api.recover(data, function (success, data, error) {
                if (success) Alert.alert('Password Reset Sent', data.msg, [{text: 'Ok', style: 'cancel'}]);
                else if (error) showError(error, callback)
            });
        })
    };
}

//Set Logged in Status
export function setStatus(loggedIn) {
    return (dispatch) => {
        if (loggedIn) dispatch({type: LOGGED_IN});
        else dispatch({type: LOGGED_OUT});
    };
}

//Check Internet Connection
export function checkNetworkConnection(callback) {
    NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) callback();
        else showError({type: NETWORK_ERROR});
    });
}

export function showError(error, callback) {
    if (error.type === ERROR) callback(error.msg)
    else {
        let type = error.type;
        let msg;

        if (type === SERVER_ERROR) msg = SERVER_MSG;
        else if (type === NETWORK_ERROR) msg = NETWORK_MSG;

        Alert.alert('Something went wrong!', msg, [{text: 'Ok', style: 'cancel'}]);
    }
}

export function fetchingOfferRequest  (){ type: FETCHING_offer_REQUEST};
export function fetchingOfferSuccess (json){
    type: FETCHING_offer_SUCCESS;
    payload: json;
};
export function fetchingOfferFailure (error){
    type: FECTHING_offer_FAILURE;
    payload: error;
};
export function fetchOffer  () {
    return async dispatch => {
        dispatch(fetchingOfferRequest());
        // setTimeout(() => {dispatch(fetchingOfferRequest());},8000);
        try{
            let respond = await fetch ('https://randomuser.me/api/?results=15');
            let json = await respond.json();
            dispatch(fetchingOfferSuccess(json.results));
        }
        catch (error) {
            dispatch(fetchingOfferFailure(error));
        }
    }
}