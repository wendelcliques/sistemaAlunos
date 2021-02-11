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

export const getResp = async (campo1) => {
   
  
    if (campo1 != undefined) {
   
        controle = campo1;
        console.log('searchStudent :: passei aqui 1 ', (controle));
   }
   
   
    let querySnapshot;
    querySnapshot = await firestore()
    .collection('students')
    .where('name', '>=', controle)
    .orderBy('name')
    .startAt(controle)
    .endAt(controle+'uf8ff')
    .get();


let resp = querySnapshot.docs.map(documentSnapshot => {
    return {...documentSnapshot.data(), id: documentSnapshot.id};
});

return resp;
};

export const getStuden = async (campo1, campo2  ) => { 

    //let controle = '';

    console.log('searchStudent :: value: antes do if', JSON.stringify(campo2));
   
   // data = 'g';
    

    //console.log('searchStudent :: value: data ', (data));

   // let c2 = JSON.stringify(data);
if (campo1 != undefined) {
   
     controle = campo1;
     console.log('searchStudent :: passei aqui 1 ', (controle));


    let querySnapshot;
     querySnapshot = await firestore()
     .collection('students')
     .where('name', '>=', controle)
     .orderBy('name')
     .startAt(controle)
     .endAt(controle+'uf8ff')
     .get();
 
 
 let resp = querySnapshot.docs.map(documentSnapshot => {
     return {...documentSnapshot.data(), id: documentSnapshot.id};
 });
 
 return resp;

} else if (campo2 != undefined) {
     controle = campo2;
     console.log('searchStudent :: passei aqui 2 ', (controle));
} 



            console.log('searchStudent :: value: if não indefinido', (campo1));

           // let controle = data

           

            let lodash = require("lodash");
        

            const isResponsible1 = await firestore()
            .collection('students')
            .where('responsible.responsible1.name', '>=', controle)
            .orderBy('responsible.responsible1.name')
            .startAt(controle)
            .endAt(controle+'uf8ff')
            .get();

          
    
            const isResponsible2 = await firestore()
            .collection('students')
            .where('responsible.responsible2.name', '>=', controle)
            .orderBy('responsible.responsible2.name')
            .startAt(controle)
            .endAt(controle+'uf8ff')
            .get();
    
    
            const isResponsible3 = await firestore()
            .collection('students')
            .where('responsible.responsible3.name', '>=', controle)
            .orderBy('responsible.responsible3.name')
            .startAt(controle)
            .endAt(controle+'uf8ff')
            .get();
    
    
            //querySnapshot2 = await firestore()
            const isResponsible4 = await firestore()
            .collection('students')
            .where('responsible.responsible4.name', '>=', controle)
            .orderBy('responsible.responsible4.name')
            .startAt(controle)
            .endAt(controle+'uf8ff')
            .get();

            let querySnapshot;
            let querySnapshot2;
            let querySnapshot3;
            let querySnapshot4;
    
            [querySnapshot, querySnapshot2, querySnapshot3, querySnapshot4] = await Promise.all([
                isResponsible1,
                isResponsible2,
                isResponsible3,
                isResponsible4
            ]);

             
    let studen = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    let studen2 = querySnapshot2.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    let studen3 = querySnapshot3.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });


    let studen4 = querySnapshot4.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });
    

   // const responsibleArray = studen.concat(studen2).concat(studen3).concat(studen4);

   const responsibleArray = lodash.concat(studen, studen2, studen3, studen4);


    console.log('searchStudent :: students pesquisa concatenada if não indefinido ', JSON.stringify(responsibleArray));
    //return responsibleArray;
    return lodash.uniqWith(responsibleArray, lodash.isEqual);

};

    
      /*  } else {

         field2 = data;
    
        let controle = field2
        console.log('searchStudent :: value: if indefinido', JSON.stringify(controle));

         //querySnapshot = await firestore()
        let lodash = require("lodash");
        

        const isResponsible1 = await firestore()
        .collection('students')
        .where('responsible.responsible1.name', '>=', controle)
        .orderBy('responsible.responsible1.name')
        .startAt(controle)
        .endAt(controle+'uf8ff')
        .get();

        const isResponsible2 = await firestore()
        .collection('students')
        .where('responsible.responsible2.name', '>=', controle)
        .orderBy('responsible.responsible2.name')
        .startAt(controle)
        .endAt(controle+'uf8ff')
        .get();


        const isResponsible3 = await firestore()
        .collection('students')
        .where('responsible.responsible3.name', '>=', controle)
        .orderBy('responsible.responsible3.name')
        .startAt(controle)
        .endAt(controle+'uf8ff')
        .get();


        //querySnapshot2 = await firestore()
        const isResponsible4 = await firestore()
        .collection('students')
        .where('responsible.responsible4.name', '>=', controle)
        .orderBy('responsible.responsible4.name')
        .startAt(controle)
        .endAt(controle+'uf8ff')
        .get();
        

        let querySnapshot;
        let querySnapshot2;
        let querySnapshot3;
        let querySnapshot4;

        [querySnapshot, querySnapshot2, querySnapshot3, querySnapshot4] = await Promise.all([
            isResponsible1,
            isResponsible2,
            isResponsible3,
            isResponsible4
        ]);

    

       

        
    
    
    let studen = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    let studen2 = querySnapshot2.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    let studen3 = querySnapshot3.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });


    let studen4 = querySnapshot4.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });
    

   // const responsibleArray = studen.concat(studen2).concat(studen3).concat(studen4);

   const responsibleArray = lodash.concat(studen, studen2, studen3, studen4);


    console.log('searchStudent :: students pesquisa concatenada if indefinido ', JSON.stringify(responsibleArray));
    //return responsibleArray;
    return lodash.uniqWith(responsibleArray, lodash.isEqual);

}
    };
        

  /*  export const getStuden2 = async (field2='r') => {

    
        let controle = field2
        console.log('searchStudent :: value: ', JSON.stringify(controle));

        let querySnapshot;
        querySnapshot = await firestore()
        .collection('students')
        .where('responsible.responsible2.name', '>=', controle)
        .orderBy('responsible.responsible2.name')
        .startAt(controle)
        .endAt(controle+'uf8ff')
        .get();
    
    
    let studen2 = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });
    console.log('searchStudent2 :: students: ', JSON.stringify(studen2));
    return studen2;
    };

    export const getStuden3 = async (field2='r') => {

    
        let controle = field2
        console.log('searchStudent :: value: ', JSON.stringify(controle));

        let querySnapshot;
        querySnapshot = await firestore()
        .collection('students')
        .where('responsible.responsible3.name', '>=', controle)
        .orderBy('responsible.responsible3.name')
        .startAt(controle)
        .endAt(controle+'uf8ff')
        .get();
    
    
    let studen3 = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });
    console.log('searchStudent3 :: students: ', JSON.stringify(studen3));
    return studen3;
    };

    export const getStuden4 = async (field2='r') => {

    
        let controle = field2
        console.log('searchStudent :: value: ', JSON.stringify(controle));

        let querySnapshot;
        querySnapshot = await firestore()
        .collection('students')
        .where('responsible.responsible4.name', '>=', controle)
        .orderBy('responsible.responsible4.name')
        .startAt(controle)
        .endAt(controle+'uf8ff')
        .get();
    
    
    let studen4 = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });
    console.log('searchStudent4 :: students: ', JSON.stringify(studen4));
    return studen4;
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

     

