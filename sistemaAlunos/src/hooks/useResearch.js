import {useEffect, useState, useCallback} from 'react';

import {
    
    searchStudent,
} from '../services/Students';

const useRechearch = () => {
  
    const [seaStudent, setSeaStudent] = useState([]);

    useEffect(
        useCallback(() => {
          

            const loadSearchStudent = async () => {
                const data = await searchStudent();
                setSeaStudent(data);

            };

            loadSearchStudent();
              
            }, []),
            
    );

    return [ seaStudent];
};

export default useRechearch

