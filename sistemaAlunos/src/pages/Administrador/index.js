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
import { getStuden } from '../../services/Students';




const Administrador = ({route, navigation}) => {

    const student1 = route.params?.student
    ? route.params.student
    : {
        id: null,
        field1: null,
        field2: null,
    };

    const [ studen , addStuden, addStuden2, addStuden3, addStuden4,] = useResearch();

    const [field1, setField1] = useState();
    const [field2, setField2] = useState('w');
    const [loading, setLoading] = useState(false);
    const [controle, setControle] = useState();

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
            field1: field1,
            field2: field2,
        }
        console.log('Administrador :: onSearch', data);
        getStuden(data);

    }

    const onControle = () => {
        setControle = 1;
        setControle = 0;

    }

    return (
              <View style={styles.container}>
                  
               <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

              <View style={styles.formContainer}>
               <AdministradorCampoAluno 
                 value={field1}
                 onChangeValue={setField1}
                 />

                <AdministradorCampoResponsavel
                 value={field2}
                 onChangeValue={setField2}
                 />
                 <ButtonPanel onNewStudentPress={() => navigation.navigate('Ate')}/>

               
                     <StudentList />
             


                </View>

                <ActionFooter>

                 <ActionPrimaryButton 
                    title={student1.id ? 'Salvar' : 'Adicionar'}
                    onPress={() => {

                        console.log('apbutton :: value: ', JSON.stringify(field2));


                        onSearch();
                        //addStuden(field2);
                    //getStuden(field2);
                    navigation.navigate('Coordenador');
                       // getStuden2(field2);
                       // getStuden3(field2);
                      //  getStuden4(field2);
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



