import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class RegisterScreen extends Component {

  constructor(){
    super()
  }

  render() {
    //const email = this.props.navigation.getParam("userEmail",'No Value Entered')
    return (
      <View>
        <Text> Register Screen  </Text>
      </View>
    );
  }
}
