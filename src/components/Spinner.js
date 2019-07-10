import React from 'react';
import {View,ActivityIndicator} from 'react-native';
import styles from '../../styles';


const Spinner=({size})=>{


    return(
    <View style={spinnerStyle}>
        <ActivityIndicator size={size||'large'}>

        </ActivityIndicator>

        </View>    
        ); 
    
}

const spinnerStyle={
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}

export {Spinner};
