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

import useStudents from '../../hooks/useStudents';

import Colors from '../../styles/Colors';




const Administrador = ({navigation}) => {

    const student = {
        id: null,
        aluno: null,
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

    const [ searchStudent] = useStudents();

    const [aluno, setAluno] = useState('')
    const [responsavel, setResponsavel] = useState('')
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
        searchStudent(data);

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


/*<TouchableOpacity 
           //onPress={onPassword}
           
           style={styles.buttonPasswordIn}
           >
               <Text style={styles.buttonPasswordInText}>

               {loadingP ? 'Enviando a solicitação...' : 'Esqueceu a senha?'}
                
               </Text>
           </TouchableOpacity>







           <View
 // behavior="padding" 
       style={styles.container}>
           

            <TextInput
           style={styles.input}
           placeholder="Nome do responsável"
           placeholderTextColor={Colors.carbon}
           //secureTextEntry
           autoCapitalize="none"
           autoCorrect={false}
           value={responsavel}
           onChangeText={text => {
               setResponsavel(text)
           }}
           />

<TouchableOpacity 
   onPress={() => {
    navigation.navigate('Ate');
}} 
//onPress={onSubmit} 
style={styles.button}>
               <Text style={styles.buttonText}>
                {loading ? 'Carregando...' : 'Pesquisar'}
               </Text>
           </TouchableOpacity>

           
           <TouchableOpacity 
           onPress={() => {
               navigation.navigate('SignUp');
           }} 
           style={styles.buttonSignIn}
           >
               <Text style={styles.buttonSignInText}>
                Criar uma conta
               </Text>
           </TouchableOpacity>
      
       </View>
       
       <View>

           
        </View>

        </View>
    )
}
           */
