import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Image,} from 'react-native'; 
import R from '../../R';
import {RoundButton} from '../components/RoundButton'
import styles from '../../styles' 
import { CustomButton } from '../components/CustomButton';
import firebase from 'firebase';
import { Spinner } from '../components';


 export default class LoginScreen extends React.Component{


  constructor(){
    super()
    this.state={
      userEmail:'',
      userPass:'',
      error:'',
      isLoading:false,
      loggedIn:false
    }
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn:true})
      }else{
        this.setState({loggedIn:false})
      }
    })
  }

//for changing toolbar background color
  static navigationOptions={
    headerTintColor:R.colors.headerColor,
    title:"LoginScreen",

    headerStyle:{
          backgroundColor:R.colors.buttonColor,
      }
  };


  renderContent(){
    if(this.state.loggedIn){
      return (
        <Button>
          Log Out
        </Button>
      )  
    }
    //return {}
  }

  renderButton(){
    if(this.state.isLoading){
      return <Spinner size ='small'/>
      
    }

    return (
      <RoundButton   onPress={()=>{
        this.setState({isLoading:true})        
        var valid = emailValidation(this.state.userEmail)
        if(valid==false){
          if(this.state.userEmail!=''){
            alert("please enter correct email id")
          }else{
            alert("please enter email id")
          }
          
        }else{
          if(this.state.userPass!=''){
            
            this.setState({error:''})
            firebase.auth().signInWithEmailAndPassword(this.state.userEmail,this.state.userPass).then(this.onLoginSuccess.bind(this)).catch(()=>{
            this.setState({error:'Authentication failed ',isLoading:false})
          })
          }else{
            alert("please enter password")
          }  
          
        }
        
      }}>
        Ok
      </RoundButton>
    )
  }

  onLoginSuccess(){
    this.setState({
      userEmail:'',
      userPass:'',
      isLoading:false,
      error:''
    })
    this.props.navigation.navigate('HomeScreen')

  }

  render() {
    
    return (
      <View style={{flex: 1,backgroundColor:R.colors.backgroundColor}}>
      <View style={styles.imageStyle}>
      <Image 
        resizeMode='contain'
        source={require('./../../assets/neosoft.png')}
      />
      
     </View>
    

    

      <CustomButton imageSrc={require('./../../assets/email.png')} placeholderName="Enter Your Email Here" onChangeText={(userEmail)=>{this.setState({userEmail})}}>

      </CustomButton>

      
      <View style={styles.SectionStyle}>
        <Image source={require('./../../assets/password.png')} style={styles.ImageStyle}/>
        <TextInput secureTextEntry={true} style={{flex:1}}
             placeholder="Enter Your Password Here"
             onChangeText={(userPass)=>{this.setState({userPass})}}
             underlineColorAndroid="transparent"
        />
      </View>  
     
      
      <View  style={styles.buttonStyle}>
          {this.renderButton()}
      </View>
      
      

      <View style={styles.buttonStyle}>  
      <RoundButton  onPress={()=>this.props.navigation.navigate('RegisterScreen',{userEmail:this.state.userEmail})}>
      Register
      </RoundButton>
      </View>


      <View style={styles.buttonStyle}>  
      <RoundButton  onPress={()=>this.props.navigation.navigate('ProfileScreen',{userEmail:this.state.userEmail})}>
       Profile
      </RoundButton>
      </View>
      <Text>
        {this.state.error}
      </Text>
   
      </View>
    );
  }
}




function emailValidation(email) {
  var pattern = /\S@\S+\.\S+/; 
  return pattern.test(email);   
}