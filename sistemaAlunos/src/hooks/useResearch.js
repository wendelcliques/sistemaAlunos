import {useEffect, useState, useCallback} from 'react';

import {
    getStudent,
    
} from '../services/Students';

const useRechearch = () => {
  
    const [seaStudent, setSeaStudent] = useState([]);

    useEffect(
        useCallback(() => {
          

            const loadSearchStudent = async (student) => {
                console.log('hooks :: getStudent', student);
                const data = await getStudent(student);
                setSeaStudent(data);

            };

            loadSearchStudent();
              
            }, []),
            
    );

    return [ seaStudent];
};

export default useRechearch

