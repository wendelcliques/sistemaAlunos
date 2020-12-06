import { Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export const isLogged = async () => {
    const userAuth = await AsyncStorage.getItem('userAuth');
    return userAuth !== null;
};

export const setUserAuth = async (uid) => {
    await AsyncStorage.setItem('userAuth', uid);
};

export const getUserAuth = async () => {
    const userAuth = await AsyncStorage.getItem('userAuth');
    return userAuth;
};

export const cleanUserAuth = async () => {
    await AsyncStorage.removeItem('userAuth');
};

export const signUp = async (data) => {
    const {email, password, name} = data

    try {
        const userInfos = await auth().createUserWithEmailAndPassword(
            email,
            password,
        );
            setUserAuth(userInfos.user.uid);
            await firestore()
            .collection('users')
            .doc(userInfos.user.uid)
            .set({
                name: name,
            })

            return {registerSuccess: true}
    } catch (e) {
        Alert.alert('Erro ao criar um Usuário', e.message);
        return {registerSuccess: false}
    }
}

export const signIn = async (data) => {
    const {email, password} = data;

    try {
        const userInfos = await auth().signInWithEmailAndPassword(
            email,
            password,
        );
        setUserAuth(userInfos.user.uid);

        return {loginSuccess: true};

    } catch (e) {
      
        Alert.alert('Erro ao tentar entrar', 
        'O e-mail ou a senha estão incorretos',
        'Por favor tente novamente');
        //console.log('signIn :: e: ', JSON.stringify(e.message));
        return {logginSuccess: false}
    }
}

export const resetPassword = async (data) => {

  
    const {email} = data;

    
    try {
        const userInfos = await auth().sendPasswordResetEmail(
            email,
           
        );
        //setUserAuth(userInfos.user.uid);

        return {resetSuccess: true};

    } catch (e) {
        Alert.alert('Erro ao tentar mudar a senha', e.message);
        return {resetSuccess: false}
    }
}