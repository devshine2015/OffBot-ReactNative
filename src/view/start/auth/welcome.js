/**
 * Author: Moses Adekunle Esan for E&M Digital
 * Date: 7/27/2017
 * Project: How to Build a React Native/Redux app using a JWT-Powered API.
 */

'use strict';

import React, {Component} from 'react';
var { View, Text } = require('react-native');

import {Actions} from 'react-native-router-flux';

import {Button} from '../index';

import styles from '../../../styles/auth/index'


export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.welcomeText]}>OfferBot</Text>
                    
                    <Button onPress={Actions.login} btnText={"Login"}/>
                    <Button onPress={Actions.register} btnText={"Register"} bordered/>
                </View>
            </View>
        );
    }
};
