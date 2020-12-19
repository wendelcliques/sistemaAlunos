import {useEffect, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    searchStudent,
} from '../services/Students';

const useStudents = (student) => {
    const [students, setStudents] = useState([]);
    const [seaStudent, setSeaStudent] = useState([]);
   

    useEffect(
        useCallback(() => {
            const loadStudents = async () => {
                const data = await getStudents(student);
               
                setStudents(data);
            };

            const loadSearchStudent = async () => {
                const data = await searchStudent(student);
                setSeaStudent(data);

            };

            loadSearchStudent();
                loadStudents();
            }, [student]),
            
    );

   
   
    return [students, addStudent, updateStudent, deleteStudent, searchStudent];
};

export default useStudents;


