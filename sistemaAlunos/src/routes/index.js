import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login/index';
import SignIn from '../pages/SignIn/index';
import Administrador from '../pages/Administrador/index';
import Ate from '../pages/Ate/index';
import Coordenador from '../pages/Coordenador/index';
import Secretario from '../pages/Secretario/index';

const Stack = createStackNavigator();

const StackScreens = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Administrador" component={Administrador} />
            <Stack.Screen name="ATE" component={Ate} />
            <Stack.Screen name="Coordenador" component={Coordenador} />
            <Stack.Screen name="Secretario" component={Secretario} />
            
        </Stack.Navigator>
    );
    };

    const Routes = () => {
        return (
            <NavigationContainer>
                
                <StackScreens />
            </NavigationContainer>
        );
        };
        
        export default Routes;