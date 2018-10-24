/*
 Navigation Page
*/
import React from 'react';
import { StackNavigator} from 'react-navigation';
import Main from './Screens/Main';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

export default class App extends React.Component{
    render(){
        return(
            <AppNavigator/>
        );
     }
}

const AppNavigator = StackNavigator({
    MainScreen: {screen: Main},
    LoginScreen: {screen: Login},
    SignupScreen: {screen: Signup},
});

