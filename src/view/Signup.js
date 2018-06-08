import React, { Component } from 'react';
import {
    StyleSheet,Image
} from 'react-native';
import logoimage from '../images/logo.png';
import styles from '../styles/signup';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label,Button, Text,Thumbnail,Icon,Right } from 'native-base';
export default class Signup extends Component<{}> {
    constructor(props){
     super(props);

     this.go_sign=this.go_sign.bind(this);

    }
    go_sign(){
      Actions.popTo('signin');
    }
    render() {
        return (
        <Container style={styles.container}>
            
            <Content>
          
              <Form style={styles.form}>
              <Image style={{ height: 50, width:50, flex: 1 }} source={logoimage} />
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry/>
                </Item>
              </Form>
              <Right>
              <Button transparent style={styles.signup}>
                <Text>Have an account?Sign in</Text>
              </Button>
              </Right>
                <Button onPress={this.go_sign} block style={styles.instructions}><Text>Sign in</Text></Button>
            </Content>
          </Container>
           
        );
      }
    }
