import React, {useEffect, useState, useCallback} from 'react'
import { FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Container from '../Core/Container'

import ResultListItem from './ResultListItem'



import useResearch from '../../hooks/useResearch'



const ResultList = ({student}) => {
    const navigation = useNavigation();
    //const [students, responsible] = useStudents(student);

    
    
    const [studen, 
       // studen2, 
       // studen3, 
       // studen4
    ] = useResearch();

  //  console.log('StudentList :: value -teste list: ', JSON.stringify(studen));

    

   // console.log('StudentList2 :: value: ', JSON.stringify(studen2));

   // console.log('StudentList3 :: value: ', JSON.stringify(studen3));

    //console.log('StudentList4 :: value: ', JSON.stringify(studen4));

 
    return (
        <Container
        title="Lista de Alunos">

                        


            <FlatList

            data={studen}

          
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
                
                <ResultListItem
                student={item}

             
                onStudentPress={student => {
                    navigation.navigate('Ate', {
                        student: student,
                        isEdit: true,

                    });
                }}
                />

               
            )}
           
           />
        </Container>
    );
};

export default ResultList;
