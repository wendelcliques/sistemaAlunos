import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'

import {getUserAuth as register} from '../../services/Auth';

const SignIn = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        if (loading === false) {
            setLoading(true);
            const {userAuth} = await register({
                email,
                password,
                //name,
            })

            if (userAuth === true) {
                navigation.reset({
                    index: 0,
                    key: null,
                    routes: [{name: 'Administrador'}]
                })
            } else {
                setLoading(false);

            }
        }
    }


    return (
       <KeyboardAvoidingView 
      // behavior="padding" 
       style={styles.container}>
           <TextInput
           style={styles.input}
           placeholder="Seu e-mail"
           placeholderTextColor={Colors.carbon}
           keyboardType="email-address"
           autoCapitalize="none"
           autoCorrect={false}
           value={email}
           onChangeText={text => {
               setEmail(text)
           }}
           />

            <TextInput
           style={styles.input}
           placeholder="Sua senha"
           placeholderTextColor={Colors.carbon}
           secureTextEntry
           autoCapitalize="none"
           autoCorrect={false}
           value={password}
           onChangeText={text => {
               setPassword(text)
           }}
           />

<TouchableOpacity onPress={onSubmit} style={styles.button}>
               <Text style={styles.buttonText}>
                {loading ? 'Carregando...' : 'Entrar'}
               </Text>
           </TouchableOpacity>

           <TouchableOpacity 
           onPress={() => {
               navigation.navigate('SignIn');
           }} 
           style={styles.buttonSignIn}
           >
               <Text style={styles.buttonSignInText}>
                Criar uma conta
               </Text>
           </TouchableOpacity>
       </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    input: {
        borderWidth: 1,
        width: '80%',
        borderColor: Colors.champagne,
        borderRadius: 2,
        paddingHorizontal: 20,
        fontSize: 16,
        color: Colors.white,
        height: 44,
        marginTop: 20,
    },
    button: {
        height: 44,
        width: '80%',
        backgroundColor: Colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 20,

    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 16,

    },
    buttonSignIn: {
        marginTop: 10,

    },
    buttonSignInText: {
        color: Colors.blueDark, 
        textDecorationLine: 'underline',
    }
});
export default SignIn
