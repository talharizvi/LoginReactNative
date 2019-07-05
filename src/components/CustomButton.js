import React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { tsPropertySignature } from '@babel/types';



const CustomButton=(props)=>{

    return (
                <View style={btnStyle.customContainerStyle}>
            {/* './../../assets/email.png' */}
        <Image source={props.imageSrc} style={btnStyle.imgStyle} />
        <TextInput style={{flex:1}}
             placeholder={props.placeholderName}
             onChangeText={(props.onChangeText)}
             underlineColorAndroid="transparent"
        />
      </View> 
       
    )
}

const btnStyle=StyleSheet.create({
    imgStyle:{
        height:25,
        width:25,
        alignItems: 'center',
        margin:10
    },
    customContainerStyle:{
        flexDirection:'row',
        justifyContent:'center',
        borderColor: '#000000',
        borderRadius:5,
        borderWidth:1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        height: 40,
        marginTop: 20,
    },
    textStyle:{
        fontSize:40,
        alignItems: 'center',
    },


})

export {CustomButton}