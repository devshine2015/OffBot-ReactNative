import { Platform } from 'react-native';
import {
    StyleSheet
  } from 'react-native';
import constvalue from './component_const';
  module.exports = StyleSheet.create({
    container: {
      backgroundColor: constvalue.BACKGROUDCOLOR,
  
    },
    
    header: constvalue.HDEARR,
    logo: constvalue.LOGO
    ,
    listitem: {
      borderRadius: constvalue.CARDVIEW_CORNER,
      backgroundColor: constvalue.BACKGROUDCOLOR,
  
  
  
    },
    listimage: {
      borderRadius: constvalue.CARDVIEW_CORNER,
      height: 176,
      width: null,
      flex: 1,
      zIndex: 0,
    },
    itemcontent: {
      marginTop: 15,
      marginLeft: 18,
      marginRight: 20,
      fontSize: 18,
      fontFamily:'Montserrat-Medium',
      color: '#FFFFFF'
    },
    itemtitle: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      fontSize: 12,
      fontFamily:'Montserrat-Bold',
  
    },
    listitemdetails: {
      borderBottomWidth: 0,
    }
    ,
    controlbutton: {
      marginTop: -34,
      alignSelf: 'flex-end',
      marginRight: 13,
      height: 28,
      width: 109,
      borderRadius: 8,
      backgroundColor: constvalue.SMALLBUTTON_BACKGROUND,
      zIndex: 1,
      paddingLeft: 13,
    }
    ,
    buttontext: {
      marginTop: 4,
      fontSize: 18,
      color: '#FFFFFF'
    },
    listview: {
      shadowOpacity: 0.5,
      shadowRadius: 9,
      shadowOffset: { width: 0, height: 0 },
      borderRadius: constvalue.CARDVIEW_CORNER,
      backgroundColor: constvalue.FROTGROUNDCOLOR,
      elevation: 2,
      flex: 1,
      flexDirection: 'column',
      marginLeft:14,
      marginRight: 16,
      marginTop: 20,
      marginBottom: 7,

    },
    imageview: {
      shadowOpacity: 0.4,
      shadowRadius: 7,
      shadowOffset: { width: 0, height: 0 },
      borderRadius: constvalue.CARDVIEW_CORNER,
      backgroundColor: constvalue.FROTGROUNDCOLOR,
      // elevation: 2,
    },
    linearGradient: {
      marginTop:9,
      paddingTop: 7,
      height:50,
      width:50,
      paddingLeft: 8,
      borderRadius: 25,
      marginLeft: 14,
    },
    buttonText: {
      fontSize: 18,
      fontFamily:'Montserrat-Medium',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    buttontext_small: {
      marginTop: 4,
      fontSize: 14,
      color: '#FFFFFF',
      fontFamily:'Montserrat-Medium',
    },
    popcontrolbutton_left: {
      marginTop: 45,
      alignSelf: 'flex-end',
      marginRight: -1,
      height: 22,
      width: 100,
      borderRadius: 8,
      backgroundColor: constvalue.SMALLBUTTON_BACKGROUND,
      zIndex: 1,
      paddingLeft: 13,
    }
    ,
    popcontrolbutton_left_deactivate: {
      marginTop: 45,
      alignSelf: 'flex-end',
      marginRight: -2,
      height: 24,
      width: 107,
      borderRadius: 8,
      backgroundColor:'#000000',
      zIndex: 1,
      paddingLeft: 13,
    }
    ,
    popcontrolbutton_right: {
      marginTop: 45,
      alignSelf: 'flex-start',
      marginRight: 0,
      height: 24,
      width: 87,
      borderRadius: 8,
      backgroundColor: constvalue.SMALLBUTTON_BACKGROUND,
      zIndex: 1,
      paddingLeft: 15,
    }
    ,
    popcontrolbutton_right_deactive: {
      marginTop: 45,
      alignSelf: 'flex-start',
      marginRight: 0,
      height: 24,
      width: 87,
      borderRadius: 8,
      backgroundColor:'#000000',
      zIndex: 1,
      paddingLeft: 15,
    },
    categorytitletext:{
    color:'#FFFFFF',
    fontSize:30,
    marginTop:39,
    marginLeft: 29,
    lineHeight:37,
    fontFamily:'Montserrat-SemiBold',
    marginBottom: 7,
    },
    categorytext:{
    color:'#FFFFFF',
    fontSize:18,
    marginLeft: 32,
    lineHeight:47,
    fontFamily:'Montserrat-Medium'
    }
    ,
    clearbutton:{
      alignSelf: 'flex-start',
      fontFamily:'Montserrat-Medium',
      fontSize:18,
      color:'rgb(255,6,23)',
      marginLeft: 25,
      marginTop:59,
    },
    cancelbutton:{
      alignSelf: 'flex-end',
      fontFamily:'Montserrat-Medium',
      fontSize:18,
      color:'#FFFFFF',
      marginRight: 16,
      marginTop: 59,
    },
    searchbox:{
      height:80,
      backgroundColor:'#FFFFFF'
    },
    searchlistitemtext:{
      fontSize:18,
      fontFamily:'Montserrat-Medium',
      color:'#FFFFFF',
      lineHeight:37,
      marginLeft: 32,
      
    }
  });