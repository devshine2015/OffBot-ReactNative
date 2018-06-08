import React from "react";
import PropTypes from 'prop-types';
import { AppRegistry, Image, StatusBar,StyleSheet,TouchableHighlight} from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Left,
  Body,Thumbnail,View
} from "native-base";
 
import { Actions } from 'react-native-router-flux';
import dumpimage from '../images/dump.jpg';
import styles from '../styles/sidebar';
import { Col, Row, Grid } from "react-native-easy-grid";
export default class SideBar extends React.Component {
   
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Grid>
            <Row>
            <Image
            resizeMode='cover'
            style={{
              
              height:71,
              width:71,
              borderRadius:35.5,
              marginTop: 22,
              marginLeft:52
            }}
            source={dumpimage}
          />
            </Row>
            <Row>
          <View style={{marginTop:10}}>   
          <Text style={styles.name_text}>
          John Smith
          </Text>
          <Text style={styles.job_text}>
          Platinum Player
          </Text>
          <Text style={styles.follow_text}>
          590,075 Points
          </Text>
           </View>
            </Row>
            <Row>
            <View>
          <TouchableHighlight onPress={() => Actions.offerlist()}>
            <Text style={{fontSize:22,
         color:'#FFFFFF',
         fontWeight:'bold',
         marginLeft: 37,
         marginTop:65,
         fontFamily:'Montserrat-Bold'}}>
              Home
            </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.myoffer()}>
            <Text style={styles.menu_text} >
              myOffers
            </Text>
            </TouchableHighlight>
            <TouchableHighlight>
            <Text style={styles.menu_text}>
              Map
            </Text>
            </TouchableHighlight>
            <TouchableHighlight>
            <Text style={styles.menu_text}>
              Settings
            </Text>
            </TouchableHighlight>  
          </View> 
            </Row>      
          </Grid>  
          
          
                 
          
        </Content>
      </Container>
    );
  }
}

