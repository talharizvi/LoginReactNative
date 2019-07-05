import {createStackNavigator, createAppContainer} from 'react-navigation';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen'
import ProfileScreen from './src/screens/ProfileScreen'


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
        }    
    }
);



const AppNavigator = createAppContainer(MainNavigator);
export default AppNavigator

