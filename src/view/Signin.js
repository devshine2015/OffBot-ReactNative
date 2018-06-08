/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Icon, Right } from 'native-base';
import {
  StyleSheet, Image
} from 'react-native';
import styles from '../styles/singin';
import logo from '../images/logo.png'
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import {login} from '../reducers/actions/index';
class Signin extends Component<{}> {
  constructor(props) {
    super(props);
    this.gotosingup = this.gotosingup.bind(this);
    this.gotousercard=this.gotousercard.bind(this);
    this.login=this.login.bind(this);
    this.errorCB=this.errorCB.bind(this);
    this.state={
      email:'',
      password:'',
      error:{email:'',password:'',general:''},
      

    };
  }
   
  gotosingup() {
    
    Actions.signup();
  }
  
  render() {
    return (

      <Container style={styles.container}>

        <Content>

          <Form style={styles.form}>
            <Image style={{ height: 50,width:50, flex: 1 }} source={logo} />
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text)=>{this.setState({email:text});}} error={this.state.error['email']} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry onChangeText={(text)=>{this.setState({password:text});}} error={this.state.error['password']}/>
            </Item>


          </Form>
          <Right>
            <Button onPress={this.gotosingup}  transparent style={styles.signup}>
              <Text>Don't have an account?Sign up</Text>
            </Button>
          </Right>
          <Button onPress={this.gotousercard}  block style={styles.instructions}><Text>Sign in</Text></Button>
        </Content>
      </Container>

    );
  }
  // gotousercard(){
  //   console.log('result:',this.state.email);
  //   // Actions.offerlist();
    
  // }
  gotousercard() {
    
    // console.log('result:',this.state.email);
    var state = this.state;
    var error = state.error;
    var errCount = 0;

    // if (state.email.length <= 0) errCount++; //check email first
    // error["email"] = (state.email.length <= 0) ? "Your email is required!" : "";

    // if (!this.props.recover) {
    //     if (state.password.length <= 0 || state.password.length < 6) {
    //         error["password"] = "Password should be Min 6 characters";
    //         errCount++;
    //     }else{
    //         error["password"] = "";
    //     }

        
    // }

    // this.setState({error: error});

    // if (errCount <= 0) {
        var data = {
            
            email:state.email,
            password: state.password,
        }
        
        this.login(data,this.errorCB);
        // this.props.onPress(data, this.errorCB.bind(this));
    // }
}

errorCB(err) {
    var error = this.state.error;

   
    if (err.email) error["email"] = err.email;
    else error["general"] = err;

    this.setState({error: error});
}
login(data,errorCB) {
  // console.log('action_run:',data.email);
  this.props.login(data, errorCB);
}
}
export default connect(null, {login})(Signin);



