import React, {useState, useEffect, isValidElement} from 'react'
import { StatusBar, View, ScrollView, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import ActionFooter, {
    ActionPrimaryButton,
    ActionSecondaryButton,

} from '../../componentes/Core/ActionFooter';

import ResultList from '../../componentes/ResultList';

const Coordenador = () => {
    return (
        <View>
            <ResultList />
        </View>
    )
}

export default Coordenador
