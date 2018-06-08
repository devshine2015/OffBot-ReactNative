import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'native-base';
class BigButton extends Component {

     

   

    render() {
        return (
            <Button>
                 
            </Button>
        );
    }
}

const styles = StyleSheet.create({
    container: {
         
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        
    },
    label: {
        color: '#2A379F',
        fontSize: 16,
    },
});

export default BigButton;