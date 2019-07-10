import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import AlbumList from '../components/AlbumList';


export default class HomeScreen extends Component {
  
   

  render() {
    return (
        <ScrollView  style={{backgroundColor:'#d9c5b8'}}>
      <View>
        <Text> Home Screen </Text>
        <AlbumList/>
      </View>
      </ScrollView>
    ); 
  }
}
