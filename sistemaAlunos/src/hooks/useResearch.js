import {useEffect, useState, useCallback} from 'react';

import {
    addStuden
    //getStudents,
    //getStuden,
   // getStuden2,
   // getStuden3,
   // getStuden4,
    
} from '../services/Students';

const useRechearch = (field2) => {

    console.log('useRechearch :: field2:  ', JSON.stringify(field2));
   // const [students, setStudents] = useState();
    const [studen, setStuden] = useState();
    const [studen2, setStuden2] = useState();
    const [studen3, setStuden3] = useState();
    const [studen4, setStuden4] = useState();

    useEffect(
        useCallback(() => {
           /* const loadStudents = async () => {
                
                const data = await getStudents();
                setStudents(data);

            };*/

            const loadStuden = async () => {
                
                const data = await getStuden(field2);
                setStuden(data);

            };

           
           
           // loadStudents();
            loadStuden();
            //loadStuden2();
            //loadStuden3();
           // loadStuden4();
              
            }, [field2]),
            
    );

    console.log('useRechearch :: value: addStuden ', JSON.stringify(studen));

    //console.log('useRechearch :: value: ', JSON.stringify(studen2));

    //console.log('useRechearch :: value: ', JSON.stringify(studen3));

    //console.log('useRechearch :: value: ', JSON.stringify(studen4));
    return [studen, addStuden, studen2, studen3, studen4, ];
    
};

export default useRechearch;

