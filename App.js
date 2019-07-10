
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Image} from 'react-native';
import AppNavigator from './Routes';
import firebase from 'firebase';

 

export default class App extends Component<Props> {

 

  componentWillMount(){                   
    firebase.initializeApp({
      apiKey: "AIzaSyBhCcw63YEkPuig6BaRGB8Xn_ufb1XnmJI",
      authDomain: "logindemo-8d8c7.firebaseapp.com",
      databaseURL: "https://logindemo-8d8c7.firebaseio.com",
      projectId: "logindemo-8d8c7",
      storageBucket: "",
      messagingSenderId: "518930348214",
      appId: "1:518930348214:web:98173dce17ebddfa"
    })
  }

  render(){
    return <AppNavigator />
  }
 
}
