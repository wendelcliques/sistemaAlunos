import {useEffect, useState, useCallback} from 'react';

import {
    getStuden
   
    
} from '../services/Students';

const useRechearch = (field2) => {

    console.log('useRechearch :: field2:  ', JSON.stringify(field2));
   // const [students, setStudents] = useState();
    const [studen, setStuden] = useState();
    

    useEffect(
        useCallback(() => {
         

            const loadStuden = async () => {
                
                const data = await getStuden(field2);
                setStuden(data);

            };

           
           
         
            loadStuden();
            
              
            }, [field2]),
            
    );

    console.log('useRechearch :: value: addStuden ', JSON.stringify(studen));

   
    return [studen ];
    
};

export default useRechearch;

