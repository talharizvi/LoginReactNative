import React, { Component } from 'react';
import { View, Text,TextInput,Button } from 'react-native';
import firebase from 'firebase';


export default class RegisterScreen extends Component {

  constructor(){
    super()
    this.state={
      email:'',
      password:'',
      error:''
    }
  }

  

  onButtonPress(){
    const{email,password}=this.state
  
   firebase.auth().createUserWithEmailAndPassword(email,password)
   .catch(()=>{
     this.setState({error:'Authentication faileD'})
   })
    
  }


  render() {
    //const email = this.props.navigation.getParam("userEmail",'No Value Entered')
    return (
      <View>
        <Text> Register Screen  </Text>
        <TextInput placeholder="Enter Email" onChangeText={email=>this.setState({email})}>

        </TextInput>

        <TextInput placeholder="Enter Password" onChangeText={password=>this.setState({password})}>

        </TextInput>
       

        <TextInput placeholder="Confirm Password">

        </TextInput>

        <Text>
          {this.state.error}
        </Text>

        <Button title="Ok" onPress={this.onButtonPress.bind(this)}>

        </Button>

      </View>
    );
  }
}
