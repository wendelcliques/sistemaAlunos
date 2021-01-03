import {useEffect, useState, useCallback} from 'react';

import {
    getStudents,
    addStuden,
    addStuden2,
    addStuden3,
    addStuden4,
    
} from '../services/Students';

const useRechearch = (studen) => {

    console.log('useRechearch :: value: ', JSON.stringify(studen));
  
    const [stud, setStud] = useState([]);

    useEffect(
        useCallback(() => {
          

            const loadSearchStudent = async () => {
                
                const data = await addStuden(studen);
                setStud(data);

            };

            loadSearchStudent();
              
            }, [studen]),
            
    );

    return [ stud, addStuden2, addStuden3, addStuden4,];
};

export default useRechearch

