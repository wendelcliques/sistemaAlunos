import {useEffect, useState, useCallback} from 'react';

import {
    addStuden,
    
} from '../services/Students';

const useRechearch = (student1) => {

    console.log('useRechearch :: value: ', JSON.stringify(student1));
  
    const [seaStudent, setSeaStudent] = useState([]);

   /* useEffect(
        useCallback(() => {
          

            const loadSearchStudent = async () => {
                
                const data = await getStudents();
                setSeaStudent(data);

            };

            loadSearchStudent();
              
            }, []),
            
    );*/

    return [ seaStudent, addStuden];
};

export default useRechearch

