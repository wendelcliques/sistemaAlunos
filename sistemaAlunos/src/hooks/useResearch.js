import {useEffect, useState, useCallback} from 'react';

import {
    //getStudents,
    getStuden,
    getStuden2,
    getStuden3,
    getStuden4,
    
} from '../services/Students';

const useRechearch = () => {

   
   // const [students, setStudents] = useState();
    const [studen, setStuden] = useState();
    const [studen2, setStuden2] = useState();
    const [studen3, setStuden3] = useState();
    const [studen4, setStuden4] = useState();

    useEffect(
        useCallback(() => {
            const loadStudents = async () => {
                
                const data = await getStudents();
                setStudents(data);

            };

            const loadStuden = async () => {
                
                const data = await getStuden();
                setStuden(data);

            };

            const loadStuden2 = async () => {
                
                const data = await getStuden2();
                setStuden2(data);

            };

            const loadStuden3 = async () => {
                
                const data = await getStuden3();
                setStuden3(data);

            };

            const loadStuden4 = async () => {
                
                const data = await getStuden4();
                setStuden4(data);

            };
           // loadStudents();
            loadStuden();
            loadStuden2();
            loadStuden3();
            loadStuden4();
              
            }, []),
            
    );
    console.log('useRechearch :: value: ', JSON.stringify(studen4));
    return [ , studen, studen2, studen3, studen4,];
    
};

export default useRechearch;

