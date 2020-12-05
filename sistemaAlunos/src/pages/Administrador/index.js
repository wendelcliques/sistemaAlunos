import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import ActionFooter, {
    ActionSecondaryButton,

} from '../../componentes/Core/ActionFooter';

import {cleanUserAuth} from '../../services/Auth';

import Colors from '../../styles/Colors';

const Administrador = ({navigation}) => {

    const onLogoutPress = async () => {
        await cleanUserAuth();
        navigation.reset({
            index: 0,
            key: null,
            routes: [{name: 'SignIn'}],
        });
    }

    return (
        <View style={StyleSheet.container}>
            <ActionFooter>
                <ActionSecondaryButton 
                    title="Logout"
                    onPress={onLogoutPress}
                />
            </ActionFooter>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

export default Administrador
