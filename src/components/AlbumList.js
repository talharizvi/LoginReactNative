import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'


class AlbumList extends Component{
    
    state = {albums:[]}

    
    componentWillMount(){
        //then is called when http request execute
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        // .then(response=>this.setState({albums:response.data}))
        
    }

    componentDidMount(){
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            this.setState({albums:responseJson})
            //return responseJson
        }).catch((error)=>{
            console.log(error);
        });
    }



    renderAlbums(){
        return(
            
             this.state.albums.map((album)=>
            <View>
                <AlbumDetail key={album.url} album={album}/>    

            </View>
             )
            
        ) 
    }

    render(){
        console.log(this.state)    
        return(
        <View>
            <Text> AlbumList!!!!</Text>
            
            {this.renderAlbums()}

        </View>
        );    
    }
}

export default AlbumList;

