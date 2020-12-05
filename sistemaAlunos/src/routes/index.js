import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { isLogged } from '../services/Auth'

import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';
import Administrador from '../pages/Administrador/index';
import Ate from '../pages/Ate/index';
import Coordenador from '../pages/Coordenador/index';
import Secretario from '../pages/Secretario/index';

const Stack = createStackNavigator();

const StackScreens = ({logged}) => {
    return (
         //terminar lógica de identificação do usuario
         
        <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName={logged? 'Administrador' : 'SignIn'}>   
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Administrador" component={Administrador} />
            <Stack.Screen name="ATE" component={Ate} />
            <Stack.Screen name="Coordenador" component={Coordenador} />
            <Stack.Screen name="Secretario" component={Secretario} />
            
        </Stack.Navigator>
    );
    };

    const Routes = () => {
        const [logged, setLogged] = useState(false);

        useEffect(() => {
            async function initialVerifications() {
            if(await isLogged()) {
                setLogged(true);
            }
        }

        initialVerifications();
        })


        return (
            <NavigationContainer>
                
                <StackScreens logged={logged}/>
            </NavigationContainer>
        );
        };
        
        export default Routes;