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

    const student1 = route.params?.student1? route.params.student1
    
    : {
        id: null,
        student: null,
        responsible: 'we',
    }

    const [ ,] = useResearch();

    const [student, setStudent] = useState('')
    const [responsible, setResponsible] = useState(student1.responsible)
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
            id: student1.id,
            student: student,
            responsible: responsible,
        }
        console.log('Administrador :: onSearch', data);
        getStudent(data);

    }

    return (
              <View style={styles.container}>
                  
               <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

              <View style={styles.formContainer}>
               <AdministradorCampoAluno 
                 value={student}
                 onChangeValue={setStudent}
                 />

                <AdministradorCampoResponsavel
                 value={responsible}
                 onChangeValue={setResponsible}
                 />
                 <ButtonPanel onNewStudentPress={() => navigation.navigate('Ate')}/>

               
                     <StudentList />
             


                </View>

                <ActionFooter>

                 <ActionPrimaryButton 
                    title={student1.id ? 'Salvar' : 'Adicionar'}
                    onPress={() => {
                     getStudent(student1);
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



