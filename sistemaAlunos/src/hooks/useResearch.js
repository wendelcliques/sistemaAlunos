import {useEffect, useState, useCallback} from 'react';

import {
    getStudents,
    
} from '../services/Students';

const useRechearch = () => {
  
    const [seaStudent, setSeaStudent] = useState([]);

    useEffect(
        useCallback(() => {
          

            const loadSearchStudent = async (student) => {
                const data = await getStudents(student);
                setSeaStudent(data);

            };

            loadSearchStudent();
              
            }, []),
            
    );

    return [ seaStudent];
};

export default useRechearch

