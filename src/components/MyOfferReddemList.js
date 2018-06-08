
import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image,Content, View,TouchableHighlight,Modal } from "react-native";
import PropTypes from "prop-types";
import styles from '../styles/myoffer';
import dumpimage from '../images/dump.jpg';
import { Actions } from 'react-native-router-flux';
import barcodeimage from '../images/barcode.png';
import {connect} from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";
import Barcode from 'react-native-barcode-builder';
class MyOfferReddemList extends Component {
  constructor(props){
      super(props);
      
  }



  componentWillMount() {
    
    this.setState({ popupWindow: "0" });
    this.setState({modalVisible:false});
    
}
state = {
    modalVisible: false,
  };

  openModal(item) {
    this.setState({
        modalVisible:true,
        details_name:item.name,
        details_description:item.description,
        details_barcode:item.barcode_url
    });
  }

  closeModal() {
    this.setState({modalVisible:false});
  }



  _keyExtractor = item => item.id ;

  _renderItem = ({ item }) => {
    
    let content =<View></View>;
    if (item.redeemed) {
      content = <TouchableHighlight  underlayColor='rgb(11,148,150)' onPress={() => this.openModal(item)} style={styles.listview} >
      <View>
          <Text style={styles.listtitletext}>{item.name}</Text>
          <Text style={styles.listtimetext}>5 pm today</Text>
          <Text style={styles.listcontenttext_re}>{item.story}</Text>
          <Text style={styles.listdatetext}>Redeemed {item.updated}</Text>
      </View>
</TouchableHighlight>;
    }
    return (
      

      <View>{content}</View>    




    );
  };

  render() {
    return (
      <View>  
      <FlatList
        style={{ flex: 1 }}
        data={this.props.randomoffer.offer}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />

      <Modal
      visible={this.state.modalVisible}
      animationType={'slide'}
      onRequestClose={() => this.closeModal()}
  >
    
    <Grid style={{backgroundColor:'#000000'}}>
            <Row style={{height:113}}>
                    <Grid>
                     <Col>
                        <TouchableHighlight   onPress={() => this.setState({ popupWindow: "0" })}  style={this.state.popupWindow == "0" ? styles.popcontrolbutton_left : styles.popcontrolbutton_left_deactivate}>

                        <Text style={styles.buttontext}>Information</Text>

                        </TouchableHighlight>
                     </Col>
                     <Col>
                        <TouchableHighlight   onPress={() => this.setState({ popupWindow: "1" })}  style={this.state.popupWindow == "1" ? styles.popcontrolbutton_right : styles.popcontrolbutton_right_deactive}>

                        <Text style={styles.buttontext}>Barcode</Text>

                        </TouchableHighlight>
                     </Col>
                    </Grid>
            </Row>
            <Row>{this.state.popupWindow == "0"
            ?<View><Text style={styles.pop_bigtext}>Offer Information</Text>
                    <Text style={styles.pop_titletext}>{this.state.details_name}</Text>
                    <Text style={styles.pop_subtitle}>Description</Text>
                    <Text style={styles.pop_contente}>{this.state.details_description}</Text>
                    <Text style={styles.pop_where}>Where</Text>
                    <Text style={styles.pop_wherecontent}>Lorem Imspum Bar elit. Sed gravida dolor nec tortor condimentum, et tincidunt arcu eleifend.</Text>
                    <Text style={styles.pop_phone}>For help call: 290-123-9010</Text>
                </View>
            :
            null    
            }
          {
            this.state.popupWindow == "1"
            ?<Grid>
              <Row>

                {/* <Image resizeMode='cover' source={barcodeimage} style={{height:178,flex:1}} /> */}
                <View style={{ flex: 1, alignSelf: 'center',justifyContent: 'center', height: 178, backgroundColor: 'white', width: 375 }}><Barcode value={this.state.details_barcode} format="CODE128" /></View>

              </Row>
              <Row>
                <View>
                  <Text style={styles.barcontente_text}>By having an agent scan this barcode you are redeeming this offer and it will no longer be valid.</Text>
                  <Text style={styles.barhelp_text}>Help</Text>
                  <Text style={styles.barhelpct}>Lorem Imspum Bar elit. Sed gravida dolor nec tortor condimentum, et tincidunt arcu eleifend.</Text>
                  <Text style={styles.barcalltext}>For help call: 290-123-9010</Text>
                </View>
              </Row>


            </Grid>
            :
            null
            }
            </Row>
            <Row style={{height:100}}>
                    <Grid>
                            <Col><TouchableHighlight onPress={() => this.closeModal()}><Text style={styles.pop_cancel}>Cancel</Text></TouchableHighlight></Col>
                    </Grid>
            </Row>
            </Grid>
    
  </Modal>
  </View>
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
  export default connect(mapStateToProps, null)(MyOfferReddemList);
