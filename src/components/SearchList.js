
import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View,TouchableHighlight,Modal,TextInput, } from "react-native";
import PropTypes from "prop-types";
import { Container, Header, Content, Form, Item, Input, Title, Icon, Label, Button,  Thumbnail, Right, Left, Body,  Card, CardItem, List, ListItem } from 'native-base';
import styles from '../styles/usercard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import dumpimage from '../images/dump.jpg';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import {fetchOfferByCategory} from '../redux/actions/OfferActions';
import { Col, Row, Grid } from "react-native-easy-grid";
class SearchList extends Component {
  constructor(props){
      super(props);
      this.gotocarddetails=this.gotocarddetails.bind(this);
     
      
  }
  componentWillMount(){
    // this.setState({ popupWindow: "0" });
    // this.setState({modalVisible:true});
    // this.props.onRef(this);
    

  }
  componentDidMount(){
    // this.setState({modalVisible:true});
    // this.props.onRef(this);
  }
  // componentWillReceiveProps(data){
  //   this.setState({modalVisible:data.modal});
  // }
  // openModal() {
    
  //   this.setState({modalVisible:true});
    
  // }

  // closeModal() {
  //   this.setState({modalVisible:false});
  // }
  gotocarddetails(value) {
   
    // Actions.offerdetails({'details':value});
    // this.closeModal();
    // Actions.offerlist();
    this.props.close();
    // this.setState({modalVisible:false}) ;
    // Actions.offerlist();
    
    // console.log('listitem:',value);

  }
  _keyExtractor = item => item.id ;

  _renderItem = ({ item }) => {
    
     
    
    return (
      // <View>
      //   <View style={styles.cardContainerStyle}>
      //     <View style={{ paddingRight: 5 }}>
      //       <Text style={styles.cardTextStyle}>
      //         {name.first} {name.last} {"\n"}
      //         {cell} {"\n"}
      //         {email}
      //       </Text>
      //     </View>
      //     <Image
      //       style={styles.faceImageStyle}
      //       source={{ uri: picture.medium }}
      //     />
      //   </View>
      // </View>


        <TouchableHighlight onPress={()=>this.gotocarddetails()}>
        <View>
       

          <Text style={styles.searchlistitemtext}>{item.name}</Text>

        
       
        </View>
        </TouchableHighlight>




    );
  };

  render() {
    
    return (
      
      <FlatList
        style={{ flex: 1 }}
        data={this.props.randomoffer.offer}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}/>
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
export default connect(mapStateToProps, null)(SearchList);


// OfferList.propTypes = {
//   offer: PropTypes.array
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#093339"
//   },
//   cardContainerStyle: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     margin: 5,
//     backgroundColor: "#4e8087",
//     padding: 5
//   },
//   faceImageStyle: {
//     width: 65,
//     height: 65
//   },
//   cardTextStyle: {
//     color: "white",
//     textAlign: "left"
//   }
// });
