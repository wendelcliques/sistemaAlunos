import React, {useState, useEffect, isValidElement} from 'react'
import { StatusBar, View, ScrollView, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import ActionFooter, {
    ActionPrimaryButton,
    ActionSecondaryButton,

} from '../../componentes/Core/ActionFooter';

import StudentList from '../../componentes/StudentList';

import AdministradorCampoAluno from './AdministradorCampoAluno';
import AdministradorCampoResponsavel from './AdministradorCampoResponsavel';
import ButtonPanel from '../../componentes/ButtonPanel';

import {cleanUserAuth} from '../../services/Auth';

import useResearch from '../../hooks/useResearch';

import Colors from '../../styles/Colors';




const Administrador = ({route, navigation}) => {

    const student = route.params?.student? route.params.student
    
    : {
        id: null,
        aluno: null,
        responsavel: 'we',
    }

    const [ ,] = useResearch();

    const [aluno, setAluno] = useState('')
    const [responsavel, setResponsavel] = useState(student.responsavel)
    const [loading, setLoading] = useState(false)

    const onLogoutPress = async () => {
        await cleanUserAuth();
        navigation.reset({
            index: 0,
            key: null,
            routes: [{name: 'SignIn'}],
        });
    }

    const onSearch = () => {
        const data ={
            id: student.id,
            student: aluno,
            responsible: responsavel,
        }
        console.log('Administrador :: onSearch', data);
        loadSearchStudent(data);

    }

    return (
              <View style={styles.container}>
                  
               <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

              <View style={styles.formContainer}>
               <AdministradorCampoAluno 
                 value={aluno}
                 onChangeValue={setAluno}
                 />

                <AdministradorCampoResponsavel
                 value={responsavel}
                 onChangeValue={setResponsavel}
                 />
                 <ButtonPanel onNewStudentPress={() => navigation.navigate('Ate')}/>

               
                     <StudentList />
             


                </View>

                <ActionFooter>

                 <ActionPrimaryButton 
                    title={student.id ? 'Salvar' : 'Adicionar'}
                    onPress={() => {
                     onSearch();
                    }}
                 />   
                <ActionSecondaryButton 
                    title="Logout"
                    onPress={onLogoutPress}
                />
                 </ActionFooter>

                </View>
             );

    };





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

export default Administrador



