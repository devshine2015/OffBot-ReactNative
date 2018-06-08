/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Col, Row, Grid } from "react-native-easy-grid";
import {Tab, Tabs, TabHeading, Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Icon, Right,List, ListItem,Card, CardItem, View } from 'native-base';
import {
  StyleSheet, Image,TouchableHighlight,Modal
} from 'react-native';
import Signup from './Signup';
import Usercard from './Usercard';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import logoimage from '../images/logoimage.png';
import styles from '../styles/myoffer';
import barcodeimage from '../images/barcode.png';
import MyOfferList from '../components/MyOfferList';
import MyOfferReddemList from '../components/MyOfferReddemList';
export default class MyOffer extends Component<{}> {
    
    constructor(props){
        super(props);
        this.state = {
                isOpen:false,
                activeWindow:"0"
            };
    }
    componentWillMount() {
        this.setState({ activeWindow: "0" });
        this.setState({ popupWindow: "0" });
        this.setState({modalVisible:false}); 
    }
    state = {
        modalVisible: false,
      };
    
      openModal() {
        this.setState({modalVisible:true});
      }
    
      closeModal() {
        this.setState({modalVisible:false});
      }
  render() {
        let myofferall_content = <MyOfferList/>;
        let myofferallreddemlist_content = <MyOfferReddemList/>;
    return (

        <Container style={styles.container}>
        <Grid>
        <Row style={{ height: 74 }}>   
        <Content style={styles.header}>
        
        <Grid>
          <Col>

            
          <Image source={logoimage} style={styles.logo} />
          </Col>
          
          
        </Grid> 
          
        </Content>
        </Row>
        <Row style={{height:66}}>
        <Grid>
                <Col>
                <TouchableHighlight  underlayColor='rgb(11,148,150)' onPress={() => this.setState({ activeWindow: "0" })}  style={this.state.activeWindow == "0" ? styles.controlbutton_left : styles.controlbutton_left_deactivate}>

                      <Text style={styles.buttontext}>Available</Text>

                </TouchableHighlight>
                </Col>
                <Col>
                <TouchableHighlight  underlayColor='rgb(11,148,150)' onPress={() => this.setState({ activeWindow: "1" })}  style={this.state.activeWindow == "1" ? styles.controlbutton_right : styles.controlbutton_right_deactive}>

                      <Text style={styles.buttontext}>Redeemed</Text>

                </TouchableHighlight>
                </Col>                
        </Grid>        
        </Row>
        <Row>
        {
                    this.state.activeWindow == "0"
                    ?
                    <Content>
                    {myofferall_content}
                    </Content>
        :
        null
        }
        {
                    this.state.activeWindow == "1"
                    ?<Content>
                    {myofferallreddemlist_content}
                    </Content>
        :
        null
        }
        </Row>        
        </Grid>




        </Container>        

    );
  }
}
