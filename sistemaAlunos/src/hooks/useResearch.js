import {useEffect, useState, useCallback} from 'react';

import {
    getStudent,
    
} from '../services/Students';

const useRechearch = (responsible) => {
  
    const [seaStudent, setSeaStudent] = useState([]);

    useEffect(
        useCallback(() => {
          

            const loadSearchStudent = async () => {
                
                const data = await getStudent(responsible);
                setSeaStudent(data);

            };

            loadSearchStudent();
              
            }, []),
            
    );

    return [ seaStudent];
};

export default useRechearch

