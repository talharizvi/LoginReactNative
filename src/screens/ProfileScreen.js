import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CustomButton } from '../components/CustomButton';



export default class ProfileScreen extends Component {

  constructor(){
    super()
    this.state={
      mail:''
    }
  }

  render() {
    
    const email = this.props.navigation.getParam("userEmail",'No Value Entered')
    
    return (
      <View>
        <Text> ProfileScreen </Text>
        <Text> Email :{email} </Text>
        <Text> EmailId :{this.state.mail} </Text>
        <CustomButton imageSrc={require('./../../assets/email.png')} placeholderName='Email Enter' onChangeText={(mail)=>{this.setState({mail})}}></CustomButton>
      </View>
    );
  }
}
