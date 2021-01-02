import React, {useState, useEffect, isValidElement} from 'react'
import { StatusBar, View, ScrollView, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import ActionFooter, {
    ActionPrimaryButton,
    ActionSecondaryButton,

} from '../../componentes/Core/ActionFooter';

import StudentList from '../../componentes/StudentList';

const Coordenador = () => {
    return (
        <View>
            <Text>Coordenador</Text>
        </View>
    )
}

export default Coordenador
