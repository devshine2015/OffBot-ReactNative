import { Platform } from 'react-native';
import {
    StyleSheet
  } from 'react-native';
  import constvalue from './component_const';
  module.exports = StyleSheet.create({



    container: {
        backgroundColor: '#000000',
         
       
      }
      ,
      itemtext:{
        color:'#006064'
      },
      listitemdetails:{
        borderBottomWidth: 0
      },
      name_text:{
       
        fontFamily:'Montserrat-Bold', 
        fontSize: 16,
        fontWeight: 'bold',
        color:'#FFFFFF',
        marginLeft: 37,

      },
      job_text:{
        // marginTop:0,
        marginLeft: 37,
        fontFamily:'Montserrat-Medium', 
        fontSize: 12,
        color:'rgb(178,173,100)'
      },
      follow_text:{
        // marginTop:5, 
        fontFamily:'Montserrat-Medium', 
        marginLeft: 42, 
        fontSize: 12,
        color:'rgb(178,173,100)'
      },
      menu_text:{
         fontSize:22,
         color:'#FFFFFF',
         marginLeft: 37,
         marginTop:48,
         fontWeight:'bold',
         fontFamily:'Montserrat-Bold'

      }



  });