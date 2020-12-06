import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import Colors from '../../styles/Colors'

import {signIn as login} from '../../services/Auth';

import {resetPassword as reset} from '../../services/Auth';




const SignIn = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingP, setLoadingP] = useState(false)

    
    
    const onSubmit = async () => {
        if (email === '' || password === '') {
            Alert.alert('Por favor preencha o e-mail e a senha');
        } else {
            onSubmitC();

        };
    };
    

        const onSubmitC = async () => {
        
        if (loading === false) {
            setLoading(true);
            const {loginSuccess} = await login({
                email,
                password,
            });

            if (loginSuccess === true) {
                navigation.reset({
                    index: 0,
                    key: null,
                    routes: [{name: 'Administrador'}]
                })
            } else {
                setLoading(false);

                Alert.alert('Erro ao tentar entrar', 
                'O e-mail ou a senha estão incorretos',
                'Por favor tente novamente')

            }
        }
    }

    const onPassword = async () => {
        if (email === '') {
            Alert.alert('Por favor preencha o e-mail');
        } else {
            onPasswordC();

        };
    }

        const onPasswordC = async () => {
    
        if (loadingP === false) {
            setLoadingP(true);
            const {resetSuccess} = await reset({
                email,
              
            });

            if (resetSuccess === true) {
                Alert.alert('Solicitação enviada com sucesso',
                'Por favor verifique o seu e-mail',
                )
                navigation.reset({
                    index: 0,
                    key: null,
                    routes: [{name: 'SignIn'}]
                })
            } else {
                setLoadingP(false);


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
           onPress={onPassword}
           
           style={styles.buttonPasswordIn}
           >
               <Text style={styles.buttonPasswordInText}>
               {loadingP ? 'Enviando a solicitação...' : 'Esqueceu a senha?'}
                
               </Text>
           </TouchableOpacity>

           <TouchableOpacity 
           onPress={() => {
               navigation.navigate('SignUp');
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
    },
    buttonPasswordIn: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPasswordInText: {
        color: Colors.blueDark, 
    }
});
export default SignIn
