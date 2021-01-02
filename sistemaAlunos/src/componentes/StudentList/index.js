import React from 'react'
import { FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Container from '../Core/Container'

import StudentListItem from './StudentListItem'

import useStudents from '../../hooks/useStudents'

import useResearch from '../../hooks/useResearch'



const StudentList = ({addStuden}) => {
    const navigation = useNavigation();
    //const [students, responsible] = useStudents(student);
    const [students, responsible] = useResearch(addStuden);
    return (
        <Container
        title="Lista de Alunos">

            <FlatList
            data={students}
          
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
                
                <StudentListItem
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

export default StudentList;
