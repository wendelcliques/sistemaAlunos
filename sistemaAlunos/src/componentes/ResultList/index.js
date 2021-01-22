import React, {useEffect, useState, useCallback} from 'react'
import { FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Container from '../Core/Container'

import ResultListItem from './ResultListItem'



import useResearch from '../../hooks/useResearch'



const ResultList = ({student}) => {
    const navigation = useNavigation();
    

    
    
    const [studen, 
       
    ] = useResearch(student);

  

 
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
