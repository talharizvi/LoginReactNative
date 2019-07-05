
import {StyleSheet} from 'react-native';
import R from './R'

const styles= StyleSheet.create({
    container: {
        backgroundColor:R.colors.backgroundColor
        //'#D7978E'
      },
      loginTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 100,
      },
      textInputStyle:{
        marginTop:30,
        marginLeft:30,
        marginRight: 30,
      },
      buttonStyle:{
        paddingLeft:100,
        paddingRight: 100,
        paddingTop: 10,
      },
      roundButtonStyle:{
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 12,
        height:30,
        backgroundColor: R.colors.buttonColor,
    },
    buttonTextStyle:{
        color:R.colors.headerColor,
        textAlign:'center',
        fontStyle: 'italic',
    },
    imageStyle:{
       paddingBottom:40 
    }, 
    textInputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: R.colors.backgroundColor,
      borderWidth: 1,
      borderColor: '#000000',
      height: 40,
      borderRadius: 5 ,
      margin: 10
  },
   
  ImageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
      alignItems: 'center'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})

export default styles