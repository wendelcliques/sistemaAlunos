import {useEffect, useState, useCallback} from 'react';

import {
    getStudent,
    
} from '../services/Students';

const useRechearch = (student1) => {
  
    const [seaStudent, setSeaStudent] = useState([]);

    useEffect(
        useCallback(() => {
          

            const loadSearchStudent = async () => {
                
                const data = await getStudent(student1);
                setSeaStudent(data);

            };

            loadSearchStudent();
              
            }, []),
            
    );

    return [ seaStudent];
};

export default useRechearch

