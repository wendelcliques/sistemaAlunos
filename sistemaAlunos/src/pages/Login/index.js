import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
    }
});
export default Login
