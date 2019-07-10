import React, { Component } from 'react';
import { View, Text,Image ,Button,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail=(props)=> {
  
    return (
        
        <Card>
        <CardSection>
          <View style={{flexDirection: 'row' , justifyContent:'flex-start'}}>
          
          <View>
            <Image source = {{uri:props.album.thumbnail_image}}
              style = {{ width: 60, height: 60 }}></Image>
          </View>

            <View style={flexDirection='column'}>
              <Text style={{fontSize:20}}> {props.album.title} </Text>
              <Text style={{fontSize:10,margin:5}}> {props.album.artist} </Text>
            </View>
          </View>

          

         </CardSection>
       
         <CardSection>
         <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image source={{uri:props.album.image}} style = {{ width: 300, height: 300 }}/>
         </View>
         </CardSection>

         <CardSection>
         <View style={{justifyContent:'center',alignItems:'center'}}>
            <Button title='Buy Now' color ='#371F1C' onPress={()=>{Linking.openURL(props.album.url)}}></Button>
         </View>
         </CardSection>

        </Card>
       
    );
  };

  export default AlbumDetail;

