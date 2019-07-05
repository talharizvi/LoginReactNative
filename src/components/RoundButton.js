import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import R from '../../R';


 const RoundButton = (props)=>{
  return(
  <TouchableOpacity style={styles.roundButtonStyle} onPress={props.onPress}>
       <Text style={styles.buttonTextStyle}>{props.children}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    roundButtonStyle:{
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 12,
        height:30,
        backgroundColor: R.colors.buttonColor,
    },
    buttonTextStyle:{
        color:R.colors.headerColor,
        textAlign:'center',
        fontStyle: 'italic',
    }

})

 export {RoundButton}


