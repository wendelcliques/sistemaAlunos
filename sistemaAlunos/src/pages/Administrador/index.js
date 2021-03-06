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

    const student = route.params?.student
    ? route.params.student
    : {
        id: null,
        field1: null,
        field2: null,
    };

    const [ studen ] = useResearch();

    const [field1, setField1] = useState(student.field1);
    const [field2, setField2] = useState(student.field2);
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

   // const data = 
    
  //  {
       // id: student.id,
      //  campo1: field1,
      //  campo2: field2,
 //   }

  // console.log('Administrador :: onSearch', field2);
   // getStuden();

    const onSearch = () => {
       
       console.log('Administrador :: passei aqui', field2);

     

        navigation.navigate('Coordenador', 
       {campo1: field1, campo2: field2});

      
       
     
    }

    const onControle = () => {
        if (field1 == "" || field2 == "") {
            setField1(0)
            setField2(0)
           

            console.log('apbutton :: value: field1 controle', JSON.stringify(field1));
                        console.log('apbutton :: value: field2 controle', JSON.stringify(field2));

            Alert.alert('Pesquiza em branco',
            'Por favor informe o nome do aluno ou do responsável',
            )
           } 
           

           

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
                    title={student.id ? 'Salvar' : 'Adicionar'}
                    onPress={() => {

                        console.log('apbutton :: value: field1 ', JSON.stringify(field1));
                        console.log('apbutton :: value: field2 ', JSON.stringify(field2));

                        onControle();

                        if ((field1 == null ) && (field2 == null )) {
                            Alert.alert('Pesquiza em branco',
                            'Por favor informe o nome do aluno ou do responsável',
                            )
                        } else {
                            onSearch();
                        }

                        


                       
                       
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



