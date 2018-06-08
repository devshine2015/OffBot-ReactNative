import React, { Component } from 'react';
import {
  StyleSheet, Image, TouchableHighlight,Modal,TextInput,ActivityIndicator
} from 'react-native';
// import {Entypo,EvilIcons,FontAwesome,Foundation,Ionicons,MaterialIcons,Octicons,Roboto_medium,Roboto,SimpleLineIcons,Zocial} from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Input, Title, Icon, Label, Button, Text, Thumbnail, Right, Left, Body, View, Card, CardItem, List, ListItem } from 'native-base';
import CardDetails from './CardDetails';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from "react-navigation";
import SideBar from "./SideBar";
import MyOffer from './MyOffer';
import LinearGradient from 'react-native-linear-gradient';
import logoimage from '../images/logoimage.png';
import dumpimage from '../images/dump.jpg';
import BigButton from '../components/BITBUTTON';
import styles from '../styles/usercard';
import { Actions } from 'react-native-router-flux';
// import {offer_list} from '../reducers/actions/index';
import {fetchOffer,fetchSearch} from '../redux/actions/OfferActions'; 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import OfferList from '../components/OfferList';
import CategoryList from '../components/CategoryList';
import SearchList from '../components/SearchList';
import * as Progress from 'react-native-progress';
class Usercard extends Component<{}> {
  constructor(props) {
    super(props);
    this.gotocarddetails = this.gotocarddetails.bind(this);
    this.closeModal=this.closeModal.bind(this);
    this.state={
      searckeyword:''
    };
    this.search=this.search.bind(this);
    this.search_all=this.search_all.bind(this); 
    // this.props.offer_list();
    // console.log('respond:',this.props.loggedIn);
    // console.log('respond:',this.props.offerList);
    
  }
  search(){
    console.log('search:',this.state.searckeyword);
    this.props.fetchSearch(this.state.searckeyword);
  }
  search_all(){
    this.props.fetchOffer();
  }
  gotocarddetails() {
   
    Actions.offerdetails();

  }
  componentWillMount() {
    this.setState({ popupWindow: "0" });
    this.setState({modalVisible:false}); 
    // this.props.fetchOffer();
    // console.log('respond:',this.props.randomoffer.offer);
    
}
  openModal() {
    this.setState({modalVisible:true});
    
     
    
  }

  closeModal= () => {
    this.setState({modalVisible:false});
    console.log('modal:',this.state.modalVisible);
  }
  render() {
    let content = <OfferList offer={this.props.randomoffer.offer} />;
    if (this.props.randomoffer.isFetching) {
      content = <Progress.Circle size={30} indeterminate={true} style={{flex:1,alignSelf: 'center',justifyContent: 'center',}}/>;
    }

    let content_search = <SearchList close={this.closeModal}/>;
    if (this.props.randomoffer.isFetching) {
      content_search = <Progress.Circle size={30} indeterminate={true}/>;
    }

    // let content_modal = <View/>;
    // if (this.state.modalVisible) {
    //   content_modal = <CategoryList/>;
    // }
    return (
      <Container style={styles.container}>
        <Grid>
          <Row style={{ height: 74 }}>
            <Content style={styles.header}>
              <Grid>
                <Col>
                <TouchableHighlight onPress={() => { Actions.drawerOpen(); }}>
                <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                  locations={[0,0.6,1]}
                  colors={['rgb(1,123,125)', 'rgb(3,55,55)', 'rgb(3,35,35)']} style={styles.linearGradient}>

                  <Feather name='menu' size={35} color="#FFFFFF" />
                </LinearGradient>
                </TouchableHighlight>
                </Col>
                <Col>
                  <Image source={logoimage} style={styles.logo} />
                </Col>

                <Col >
                  <Button transparent style={{ alignSelf: 'flex-end', marginRight: 19, marginTop: 17 }} onPress={() => this.openModal()}>
                    <Foundation name='filter' size={30} color="#0B9496" />
                  </Button>
                </Col>
              </Grid>
            </Content>
          </Row>
          <Row>
            <Content style={{flex:1,alignSelf: 'center',}}>
               {content}
              {/* <List>
                <ListItem style={styles.listitemdetails}>

                  <View style={styles.listview}>

                    <View style={styles.imageview}>
                      <Image resizeMode='cover' source={dumpimage} style={styles.listimage} />
                    </View>
                    <TouchableHighlight onPress={this.gotocarddetails} style={styles.controlbutton}>

                      <Text style={styles.buttontext}>Discount</Text>

                    </TouchableHighlight>
                    <Text style={styles.itemcontent}>
                      Half off bar drinks before 5 pm today
                        </Text>
                    <Text style={styles.itemtitle}>
                      COPPERTOP MOUNTAIN BREWERY
                        </Text>
                  </View>


                </ListItem>
                
                
              </List> */}

            </Content>
          </Row>
        </Grid>
        <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
        <Grid>
          <Row style={{height:74,backgroundColor:'#000000'}}>
          <Grid>
                             <Col>
                                <TouchableHighlight   onPress={() => this.setState({ popupWindow: "0" })}  style={this.state.popupWindow == "0" ? styles.popcontrolbutton_left : styles.popcontrolbutton_left_deactivate}>

                                <Text style={styles.buttontext_small}>Categories</Text>

                                </TouchableHighlight>
                             </Col>
                             <Col>
                                <TouchableHighlight   onPress={() => this.setState({ popupWindow: "1" })}  style={this.state.popupWindow == "1" ? styles.popcontrolbutton_right : styles.popcontrolbutton_right_deactive}>

                                <Text style={styles.buttontext_small}>Search</Text>

                                </TouchableHighlight>
                             </Col>
                            </Grid>
          </Row>
          <Row style={{backgroundColor:'#000000'}}>
          {this.state.popupWindow == "0"
                    ?<View>
                      <Text style={styles.categorytitletext}>Categories</Text>
                      <CategoryList close={this.closeModal}/>
                    </View>
                  :
                  null
                  }
          {this.state.popupWindow == "1"
                    ?<Grid>
                        <Row style={{height:80, width: 260 }}>
                        <Grid>
                          <Col>
                          <TextInput placeholder={'Be'} autoCapitalize={'none'} placeholderTextColor={'#FFFFFF'} style={{width:100,marginLeft:29,color:'#FFFFFF',fontSize:30,fontFamily:'Montserrat-SemiBold', marginTop:30, borderLeftColor:'#000000',borderTopColor:'#000000',borderRightColor:'#000000',borderBottomColor:'#000000', borderWidth: 1}}
                        onChangeText={(text) => this.setState({searckeyword:text})}
                        value={this.state.searckeyword.text}/>
                          </Col>

                          <Col><TouchableHighlight onPress={this.search} ><FontAwesome name='search' size={30} color="#FFFFFF" style={{ marginTop:30 }} /></TouchableHighlight></Col>
                        </Grid>                              
                        </Row>
                        <Row style={{flex:1,alignSelf: 'center',justifyContent: 'center',}}>
                          
                          {content_search}

                        </Row>
                    </Grid>
                    :
                    null

          }
          </Row>
          <Row style={{height:100,backgroundColor:'#000000'}}>
          <Grid>
           <Col><TouchableHighlight onPress={this.search_all} ><Text style={styles.clearbutton}>Clear</Text></TouchableHighlight></Col>
           <Col><TouchableHighlight onPress={() => this.closeModal()}><Text style={styles.cancelbutton}>Cancel</Text></TouchableHighlight></Col>
          </Grid>  
          </Row>      
        </Grid>  
         </Modal> 
      </Container>

    );
  }
}


function mapStateToProps(state, props) {
  return {
    randomoffer: state.OfferReducer
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(ReduxActions, dispatch);
// }

//Connect everything
export default connect(mapStateToProps, {fetchOffer,fetchSearch})(Usercard);
// export default connect(null, {offer_list})(Usercard); 



 

