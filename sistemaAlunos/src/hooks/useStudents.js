import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {
    getStudents,
    addStudent,
} from '../services/Students';

const useStudents = () => {
    const [students, setStudents] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const loadStudents = async () => {
                const data = await getStudents();
                setStudents(data);
            }
                loadStudents();
            },
            [],
        ),
    );

    return [students, addStudent];
};

export default useStudents;


