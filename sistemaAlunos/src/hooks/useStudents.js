import {useEffect, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    
} from '../services/Students';

const useStudents = (student) => {
    const [students, setStudents] = useState([]);
   
   

    useEffect(
        useCallback(() => {
            const loadStudents = async () => {
                const data = await getStudents(student);
               
                setStudents(data);
            };

           

        
                loadStudents();
            }, [student]),
            
    );

   
   
    return [students, addStudent, updateStudent, deleteStudent];
};

export default useStudents;


