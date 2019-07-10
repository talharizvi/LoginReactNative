import {createStackNavigator, createAppContainer} from 'react-navigation';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import HomeScreen from './src/screens/HomeScreen'


const MainNavigator=createStackNavigator(
    {
        LoginScreen:{
            screen:LoginScreen
            },
        RegisterScreen:{
            screen:RegisterScreen
            },
        ProfileScreen:{
            screen:ProfileScreen
        },
        HomeScreen:{
            screen:HomeScreen    
        }    
    }
);



const AppNavigator = createAppContainer(MainNavigator);
export default AppNavigator

