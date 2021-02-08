import React, {useState, useEffect, isValidElement} from 'react'
import { StatusBar, View, ScrollView, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import ActionFooter, {
    ActionPrimaryButton,
    ActionSecondaryButton,

} from '../../componentes/Core/ActionFooter';

import ResultList from '../../componentes/ResultList';

const Coordenador = ({route}) => {

    const campo1 = route.params?.campo1;
    const campo2 = route.params?.campo2;
    console.log('Coordenador :: campo1', campo1);
    console.log('Coordenador :: campo2', campo2);

    return (
        <View>
            <ResultList 
            campo1={campo1}
            campo2={campo2}
            
            />

            <Text>campo 1:{route.params?.campo1}</Text>
            <Text>campo 2:{route.params?.campo2}</Text>
        </View>
    )
}

export default Coordenador
