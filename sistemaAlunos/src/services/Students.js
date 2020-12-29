import {Alert} from 'react-native';

import firestore from '@react-native-firebase/firestore';




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
                    name: student.name,
                    address: student.address,
                    class: student.class,
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

export const updateStudent = async student => {
    let data = {};

    console.log('updateStudent :: value: ', JSON.stringify(student));

    try {
             data = {
                    entryAt: student.entryAt || new Date(),
                    name: student.name,
                    address: student.address,
                    class: student.class,
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
                    .doc(student.id)
                    .update(data);
                } catch (error) {
                    console.error('updateStudent :: erro ao atualizar conteúdo: ',
                    JSON.stringify(data),
                    JSON.stringify(error),
                    );
                    Alert.alert('Houve um erro ao atualizar esse lançamento');
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

export const addStuden = async (field2) => {

    
        let controle = field2
        console.log('searchStudent :: value: ', JSON.stringify(controle));

        let querySnapshot;
        querySnapshot = await firestore()
        .collection('students')
        .where('responsible.responsible1.name', '>=', controle)
        .orderBy('responsible.responsible1.name')
        .startAt('uf8ff'+controle)
        .endAt(controle+'uf8ff')
        .get();
    
    
    let students = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });
    console.log('searchStudent :: students: ', JSON.stringify(students));
    return students;
    };
        
        

       
       
       /* let querySnapshot;
        querySnapshot = await firestore()
            .collection('students')
            
            .where('responsible.responsible1.name', '>=', 
            controle  || 
            '' )
            .startAt('we')
         //.endAt('we\uf8ff')
            .orderBy('order', 'asc')
            
            .get();
            
            let students = querySnapshot.docs.map(documentSnapshot => {
                return {...documentSnapshot.data(), id: documentSnapshot.id};
            });
    
            console.log('searchStudent :: value: students', JSON.stringify(students));
            return students;
           
       
       
       
       
       
       
       
       
       
        /*export const getStudents = async (student) => {
            let querySnapshot;
            querySnapshot = await firestore()
            .collection('students')
            .orderBy('entryAt')
            .get();
        
        
        let students = querySnapshot.docs.map(documentSnapshot => {
            return {...documentSnapshot.data(), id: documentSnapshot.id};
        });
        
        return students;
        };*/

     

