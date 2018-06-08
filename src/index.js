/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Router, Scene, Reducer } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Icon, Right, View } from 'native-base';
import {
    StyleSheet, Image
} from 'react-native';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};
import CardDetails from './view/CardDetails';
import MyOffer from './view/MyOffer';
import Signup from './view/Signup';
import Usercard from './view/Usercard';
import Signin from './view/Signin';
import SideBar from './view/SideBar';
import Home from './view/start/home';
import Welcome from './view/start/auth/welcome';
import Login from './view/start/auth/login';
import Register from './view/start/auth/register';
import Password from './view/start/auth/password';
// Scene Style
/* NavigationSceneRendererProps */
const getSceneStyle = (props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null
    };



    return style;
};
export default class Main extends Component<{}> {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <View style={{ flex: 1 }}>
                <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                    <Scene key="root">
                        <Scene key="home" component={Home} hideNavBar={true} initial />
                        <Scene key="welcome" hideNavBar={true} hideTabBar panHandlers={null}
                            schema="modal" direction="vertical">
                            <Scene key="welcome-" component={Welcome} title="Welcome" initial={true}
                                panHandlers={null} />
                            <Scene key="login" component={Login} title="Login" panHandlers={null} />
                            <Scene key="register" component={Register} title="Register"
                                panHandlers={null} />
                            <Scene key="password" component={Password} title="Password"
                                panHandlers={null} />
                        </Scene>
                        <Scene key="drawer" hideNavBar={true} drawer acceptTap={true} animated={true} contentComponent={SideBar} drawerWidth={192}>
                            <Scene key="main" >
                                <Scene
                                    key="offerlist"

                                    hideNavBar={true}
                                    component={Usercard}
                                    initial
                                />
                                <Scene
                                    key="offerdetails"
                                    hideNavBar={true}
                                    component={CardDetails}

                                />
                                <Scene
                                    key="myoffer"
                                    hideNavBar={true}
                                    component={MyOffer}

                                />

                            </Scene>
                        </Scene>
                    </Scene>
                </Router>
            </View>

        );
    }
}




