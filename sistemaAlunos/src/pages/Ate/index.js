import React, {useState, useEffect, isValidElement} from 'react'
import { StatusBar, View, ScrollView, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import ActionFooter, {
    ActionPrimaryButton,
    ActionSecondaryButton,

} from '../../componentes/Core/ActionFooter';

import AdministradorCampoAluno from '../Administrador/AdministradorCampoAluno';
import AdministradorCampoResponsavel from '../Administrador/AdministradorCampoResponsavel';

import Colors from '../../styles/Colors';

const Ate = ({navigation}) => {
    const student = {
        id: null,
        //entryAt: new Date(),
        aluno: null,
        address: null,
        class: null,
        phone1: null,
        phone2: null,
        phone3: null,
        phone4: null,
        photo: null,
        user: null,
        responsavel: {
            responsible1: {
                name: null,
            },
            responsible2: {
                name: null,
            },
            responsible3: {
                name: null,
            },
            responsible4: {
                name: null,
            },

        },
    }

    

    const [aluno, setAluno] = useState('')
    const [address, setAddress] = useState('')
    const [classe, setClasse] = useState('')
    const [phone1, setPhone1] = useState('')
    const [phone2, setPhone2] = useState('')
    const [phone3, setPhone3] = useState('')
    const [phone4, setPhone4] = useState('')
    const [photo, setPhoto] = useState('')
    const [user, setUser] = useState('')
    const [entryAt, setEntryAt] = useState(
        student.entryAt ? student.entryAt.toDate() : new Date(),
    )
    const [responsavel, setResponsavel] = useState('')

   const onClose = () => {
    navigation.goBack();
   };



    return (
        <View style={styles.container}>
           <StatusBar barStyle="light-content"
           backgroundColor={Colors.background}/>

           <View>

           </View>

           <ActionFooter>

                <ActionPrimaryButton 
                    title={student.id ? 'Salvar' : 'Adicionar'}
                    onPress={() => {
                     isValid() && onSave();
                     }}
                />   
                <ActionSecondaryButton 
                     title="Cancelar"
                    onPress={onClose}
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
    formContainer: {
       flex: 1,
       paddingVertical: 20,
    },
    formActionContainer: {
       flexDirection: 'row',
       justifyContent: 'center',
       marginVertical: 10,
    },
});

export default Ate
