import React, {useEffect, useState, useCallback} from 'react'
import { FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Container from '../Core/Container'

import ResultListItem from './ResultListItem'



//import useResearch from '../../hooks/useResearch'

import {getStuden} from '../../services/Students';

const ResultList = ({campo1, campo2}) => {
    const navigation = useNavigation();

    [results, setResults] = useState([]);

    useEffect(() => {
        async function loadResults() {
            const data = await getStuden(campo1, campo2);
            setResults(data);
        }

        loadResults();
    }, []);
    

    
    
    //const [studen, 
       
    //] = useResearch();

  

 
    return (
        <Container
        title="Lista de Alunos">

                        


            <FlatList

            data={results}

          
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
