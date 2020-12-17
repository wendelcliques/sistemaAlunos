import {Alert} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import {getUserAuth} from './Auth';
import StudentSchema from '../schemas/StudentSchema';

export const getStudents = async () => {
    let querySnapshot;
    querySnapshot = await firestore()
    .collection('students')
    .orderBy('entryAt')
    .get();


let students = querySnapshot.docs.map(documentSnapshot => {
    return {...documentSnapshot.data(), id: documentSnapshot.id};
});

return students;
};

export const addStudent = async student => {
    
    let data = {};

    console.log('addStudent :: value: ', JSON.stringify(student));

    try {
             data = {
                    entryAt: student.entryAt || new Date(),
                    name: student.aluno,
                    address: student.address,
                    class: student.classe,
                    phone1: student.phone1,
                    phone2: student.phone2,
                     phone3: student.phone3,
                    phone4: student.phone4,
                    photo: student.photo,
                    //user: 'string?',
                    responsible: student.responsible,
                    };

                await firestore()
                .collection('students')
                .add(data);

                Alert.alert('Aluno adicionado com sucesso');
                
                } catch (error) {
                    console.error('addStudent :: erro ao salvar conteúdo: ',
                    JSON.stringify(data),
                    JSON.stringify(error),
                    );
                    Alert.alert('Houve um erro ao salvar esse lançamento');
                }

                return data;
        
};

export const deleteStudent = async student => {
    try {
        await firestore()
        .collection('students')
        .doc(student.id)
        .delete();
    } catch (error) {
        console.error('deleteStudent :: erro ao apagar conteúdo: ',
        JSON.stringify(data),
        JSON.stringify(error),
        );
        Alert.alert('Houve um erro ao apagar esse lançamento');
    }
};
