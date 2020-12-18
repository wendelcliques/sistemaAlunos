import React, {useState, useEffect, isValidElement} from 'react'
import { StatusBar, View, ScrollView, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import ActionFooter, {
    ActionPrimaryButton,
    ActionSecondaryButton,

} from '../../componentes/Core/ActionFooter';

import CampoAluno from './CampoAluno';
import CampoResponsavel1 from './CampoResponsavel1';
import CampoResponsavel2 from './CampoResponsavel2';
import CampoResponsavel3 from './CampoResponsavel3';
import CampoResponsavel4 from './CampoResponsavel4';
import CampoClasse from './CampoClasse';
import CampoEndereco from './CampoEndereco';
import CampoPhone1 from './CampoPhone1';
import CampoPhone2 from './CampoPhone2';
import CampoPhone3 from './CampoPhone3';
import CampoPhone4 from './CampoPhone4';

import DeleteAction from './DeleteAction';

import useStudents from '../../hooks/useStudents';

import Colors from '../../styles/Colors';

const Ate = ({route, navigation}) => {
    const student = route.params?.student? route.params.student
    
    : {
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
        responsible: {
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

    const isEdit = route.params?.isEdit ? route.params.isEdit : false;

    const [, addStudent, updateStudent, deleteStudent ] = useStudents();

    const [aluno, setAluno] = useState(student.name)
    const [address, setAddress] = useState(student.address)
    const [classe, setClasse] = useState(student.class)
    const [phone1, setPhone1] = useState(student.phone1)
    const [phone2, setPhone2] = useState(student.phone2)
    const [phone3, setPhone3] = useState(student.phone3)
    const [phone4, setPhone4] = useState(student.phone4)
    const [photo, setPhoto] = useState('')
    const [user, setUser] = useState('')
    const [entryAt, setEntryAt] = useState(
        student.entryAt ? student.entryAt.toDate() : new Date(),
    )
    const [responsavel, setResponsavel] = useState('')

    const [responsavel1, setResponsavel1] = useState(student.responsible.responsible1.name)
    const [responsavel2, setResponsavel2] = useState(student.responsible.responsible2.name)
    const [responsavel3, setResponsavel3] = useState(student.responsible.responsible3.name)
    const [responsavel4, setResponsavel4] = useState(student.responsible.responsible4.name)


    const onSave = () => {

        const data = {
            id: student.id,

            entryAt: student.entryAt || new Date(),
            name: aluno,
            address: address,
            class: classe,
            phone1: phone1,
            phone2: phone2,
             phone3: phone3,
            phone4: phone4,
            photo: photo,
            //user: 'string?',
            responsible: {
                responsible1: {
                    name: responsavel1,
                },
                responsible2: {
                    name: responsavel2,
                },
                responsible3: {
                    name: responsavel3,
                },
               
               
               responsible4: {
                    name: responsavel4,
                },
            }
    };

    console.log('ate :: save ', data);
   isEdit ? updateStudent(data) : addStudent(data);

   onClose();

    };

    const onDelete = () => {
        deleteStudent(student);
        onClose();
    };

   const onClose = () => {
    navigation.goBack();
   };



    return (
        <View style={styles.container}>
           <StatusBar barStyle="light-content"
           backgroundColor={Colors.background}/>

           <ScrollView>
           <View style={styles.formContainer}> 
                <CampoAluno 
                 value={aluno}
                 onChangeValue={setAluno}
                 />

                <CampoEndereco
                 value={address}
                 onChangeValue={setAddress}
                 />

                <CampoClasse
                 value={classe}
                 onChangeValue={setClasse}
                 />

                <CampoPhone1
                 value={phone1}
                 onChangeValue={setPhone1}
                 />

                <CampoPhone2
                 value={phone2}
                 onChangeValue={setPhone2}
                 />

                <CampoPhone3
                 value={phone3}
                 onChangeValue={setPhone3}
                 />

                <CampoPhone4
                 value={phone4}
                 onChangeValue={setPhone4}
                 />

                <CampoResponsavel1
                 value={responsavel1}
                 onChangeValue={setResponsavel1}
                 />

                <CampoResponsavel2
                 value={responsavel2}
                 onChangeValue={setResponsavel2}
                 />

                <CampoResponsavel3
                 value={responsavel3}
                 onChangeValue={setResponsavel3}
                 />

                <CampoResponsavel4
                 value={responsavel4}
                 onChangeValue={setResponsavel4}
                 />
           </View>

           </ScrollView>

           <View style={styles.formActionContainer}>
               
                <DeleteAction student={student} onOkPress={onDelete} />
           </View>


           <ActionFooter>

                <ActionPrimaryButton 
                    title={student.id ? 'Atualizar' : 'Adicionar'}
                    onPress={() => {
                     onSave();
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
