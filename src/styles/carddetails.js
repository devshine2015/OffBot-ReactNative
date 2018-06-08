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
    tabcontente1:{

      marginTop: -241,
      height:435,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      marginLeft: 15,
      marginRight: 15,
      backgroundColor:constvalue.BACKGROUDCOLOR,
      shadowOpacity: 0.5,
      shadowRadius: 9,
      shadowOffset: { width: 0, height: 0 },
      elevation: 2,
    },
    tabcontente:{

      marginTop:-102,
      height:435,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      marginLeft: 15,
      marginRight: 15,
      backgroundColor:constvalue.BACKGROUDCOLOR,
      shadowOpacity: 0.5,
      shadowRadius: 9,
      shadowOffset: { width: 0, height: 0 },
      elevation: 2,
    },
    tab:{
      height:300,
      //backgroundColor:'#00838F'
    },
    listimage: {
     
      height: 260,
      flexDirection: 'column',
      flex: 1,
    },
    tapheader:{
      backgroundColor:'#00838F'
    },
   
    linearGradient: {
        ...Platform.select({
            ios: {
                height:61,
                width:165,
                borderRadius: 8,
                alignSelf: 'center',
                marginTop: 21,
            },
            android: {
                height:61,
                width:165,
                borderRadius: 8,
                alignSelf: 'center',
                marginTop: 21,
            }
        }),
        
        // flex:1,
        // flexDirection: 'column',
        
        
        
      },
      linearGradient_share: {
        ...Platform.select({
            ios: {
                height:61,
                width:165,
                borderRadius: 8,
                alignSelf: 'center',
                marginTop: 0,
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowRadius: 2,
                // shadowOpacity: 0.5,
                // borderStyle: "solid",
                // borderWidth: 2,
                borderColor: "#0b9496",

            },
            android: {
                height:61,
                width:165,
                borderRadius: 8,
                alignSelf: 'center',
                marginTop: 0,
            }
        }),
        
        // flex:1,
        // flexDirection: 'column',
        
        
        
      },
    buttontext:{
      color:'#000000',
      fontSize:18,

    },
    
    buttonshre:{
      alignSelf: 'center',
      width:150,
      marginTop:10,
      backgroundColor:'#006064',
    },
    tabactivetext:{
      color: "#ffffff",
      alignSelf: "center",
      fontFamily: "Montserrat",
      fontSize:13,
      fontStyle: "normal",
      letterSpacing: -0.27,
      marginTop:17,
      textAlign: "left",
      fontWeight:'bold',
    },
    tabtext:{
      color: "#055354",
      alignSelf: "center",
      fontSize:13,
      marginTop:17,
      fontFamily:'Montserrat-Bold',
      textAlign: "left",
    }
  });  