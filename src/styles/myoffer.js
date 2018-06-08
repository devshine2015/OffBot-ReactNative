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
    logo: constvalue.LOGO,  
    tabtitle:{
      fontSize: 11,
    },
    controlbutton_left: {
      marginTop: 21,
      alignSelf: 'flex-end',
      marginRight: 0,
      height: 24,
      width: 87,
      borderRadius: 8,
      backgroundColor: constvalue.SMALLBUTTON_BACKGROUND,
      zIndex: 1,
      paddingLeft: 13,
    }
    ,
    controlbutton_left_deactivate: {
      marginTop: 21,
      alignSelf: 'flex-end',
      marginRight: 0,
      height: 24,
      width: 87,
      borderRadius: 8,
      backgroundColor: constvalue.BACKGROUDCOLOR,
      zIndex: 1,
      paddingLeft: 13,
    }
    ,
    controlbutton_right: {
      marginTop: 21,
      alignSelf: 'flex-start',
      marginRight: 0,
      height: 24,
      width: 87,
      borderRadius: 8,
      backgroundColor: constvalue.SMALLBUTTON_BACKGROUND,
      zIndex: 1,
      paddingLeft: 5,
    }
    ,
    controlbutton_right_deactive: {
      marginTop: 21,
      alignSelf: 'flex-start',
      marginRight: 0,
      height: 24,
      width: 87,
      borderRadius: 8,
      backgroundColor: constvalue.BACKGROUDCOLOR,
      zIndex: 1,
      paddingLeft: 5,
    }
    ,
    buttontext: {
      marginTop: 4,
      fontSize: 14,
      color: '#FFFFFF',
      fontFamily:'Montserrat-Medium',
      borderRadius: 20,
    },
    listitemdetails: {
      borderBottomWidth: 0,
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
      marginTop: 9,
      marginBottom: 18,
      marginLeft: 14,
      marginRight: 16,
      height: 116,
    },
    listtitletext:{
      fontSize:18,
      color:'#FFFFFF',
      marginTop:17,
      marginLeft:18,
      lineHeight:24,
      letterSpacing:-0.4,
      fontFamily:'Montserrat-Medium',
    },
    listtimetext:{
      fontSize:18,
      color:'#FFFFFF',
      // marginTop:5,
      marginLeft:18,
      lineHeight:24,
      letterSpacing:-0.4,
      fontFamily:'Montserrat-Medium',
    },
    listcontenttext:{
      fontSize:12,
      fontWeight:'bold',
      marginBottom:9,
      marginLeft:18,
      lineHeight:24,
      letterSpacing:-0.3,
      fontFamily:'Montserrat-Bold',
    },
    listcontenttext_re:{
      fontSize:12,
      fontWeight:'bold',
      marginLeft:18,
      lineHeight:24,
      letterSpacing:-0.3,
      fontFamily:'Montserrat-Bold',
    },
    listdatetext:{
      fontSize:12,
      marginBottom:9,
      marginLeft:18,
      lineHeight:24,
      letterSpacing:-0.3,
      color:'rgb(178,173,100)',
      fontFamily:'Montserrat-Regular',
    },
    modalContainer: {
      flex: 1,
      backgroundColor:'#000000'
    },
    innerContainer: {
      backgroundColor:'#000000'
    },
    pop_bigtext:{
    fontSize:30,
    lineHeight:37,
    color:'#FFFFFF',
    fontFamily:'Montserrat-SemiBold',
    marginLeft: 29,
    },
    pop_titletext:{
    marginTop:38,
    fontSize:30,
    marginLeft: 34,
    marginRight: 40,
    color:'#FFFFFF',
    fontFamily:'Montserrat-Medium',
    lineHeight:37
    },
    pop_subtitle:{
    marginTop:14,
    marginLeft: 34,
    fontFamily:'Montserrat-Bold',
    fontSize:14,
    lineHeight:18,
    color:'#FFFFFF'
    },
    pop_contente:{
    marginLeft: 34,
    color:'#FFFFFF',
    fontSize:12,
    marginRight: 40,
    lineHeight:18,
    fontFamily:'Montserrat-Medium'
    },
    pop_where:{
    marginTop:20,
    fontFamily:'Montserrat-Bold',
    fontSize:14,
    marginRight: 40,
    color:'#FFFFFF',
    marginLeft:34

    },
    pop_wherecontent:{
    marginLeft: 34,
    marginRight: 40,
    fontSize:12,
    fontFamily:'Montserrat-Medium',
    color:'#FFFFFF',
    lineHeight:18
    },
    pop_phone:{
      marginLeft: 34,
      marginRight: 40,
      marginTop:20,
      fontSize:12,
      fontFamily:'Montserrat-Medium',
      color:'#FFFFFF',
      lineHeight:18
    },
    pop_cancel:{
      fontFamily:'Montserrat-Medium',
      fontSize:18,
      color:'#FFFFFF',
      alignSelf: 'flex-end',
      marginTop:64,
      marginRight: 16,
    },
    popcontrolbutton_left: {
      marginTop: 45,
      alignSelf: 'flex-end',
      marginRight: 0,
      height: 24,
      width: 107,
      borderRadius: 8,
      backgroundColor: constvalue.SMALLBUTTON_BACKGROUND,
      zIndex: 1,
      paddingLeft: 13,
    }
    ,
    popcontrolbutton_left_deactivate: {
      marginTop: 45,
      alignSelf: 'flex-end',
      marginRight: 0,
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
    barcontente_text:{
      fontFamily:'Montserrat-Bold',
      fontSize:14,
      lineHeight:18,
      color:'#FFFFFF',
      marginTop:27,
      marginLeft: 34,
      marginRight: 40,
    },
    barhelp_text:{
      marginTop:20,
      fontSize:14,
      fontFamily:'Montserrat-Bold',
      marginLeft: 34,
      color:'#FFFFFF',
      marginRight: 40,
      lineHeight:18
    },
    barhelpct:{
      fontFamily:'Montserrat-Medium',
      marginLeft: 34,
      marginRight: 40,
      color:'#FFFFFF',
      lineHeight:18,
      fontSize:12,
    },
    barcalltext:{
      marginTop:20,
      fontFamily:'Montserrat-Medium',
      marginLeft: 34,
      marginRight: 40,
      color:'#FFFFFF',
      lineHeight:18,
      fontSize:12,
    }
    
  });  