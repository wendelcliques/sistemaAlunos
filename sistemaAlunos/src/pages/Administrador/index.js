import React, {useState, useEffect} from 'react'
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import ActionFooter, {
    ActionSecondaryButton,

} from '../../componentes/Core/ActionFooter';

import {cleanUserAuth} from '../../services/Auth';

import Colors from '../../styles/Colors';




const Administrador = ({navigation}) => {

    const [aluno, setAluno] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [loading, setLoading] = useState(false)

    const onLogoutPress = async () => {
        await cleanUserAuth();
        navigation.reset({
            index: 0,
            key: null,
            routes: [{name: 'SignIn'}],
        });
    }

    return (
        <View style={Styles.container}>
<View
 // behavior="padding" 
       style={styles.container}>
           <TextInput
           style={styles.input}
           placeholder="Nome do aluno"
           placeholderTextColor={Colors.carbon}
          // keyboardType="email-address"
           autoCapitalize="none"
           autoCorrect={false}
           value={aluno}
           onChangeText={text => {
               setAluno(text)
           }}
           />

            <TextInput
           style={styles.input}
           placeholder="Nome do responsável"
           placeholderTextColor={Colors.carbon}
           //secureTextEntry
           autoCapitalize="none"
           autoCorrect={false}
           value={responsavel}
           onChangeText={text => {
               setResponsavel(text)
           }}
           />

<TouchableOpacity 
   onPress={() => {
    navigation.navigate('Ate');
}} 
//onPress={onSubmit} 
style={styles.button}>
               <Text style={styles.buttonText}>
                {loading ? 'Carregando...' : 'Pesquisar'}
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
      
       </View>
       
       <View>

            <ActionFooter>
                <ActionSecondaryButton 
                    title="Logout"
                    onPress={onLogoutPress}
                />
            </ActionFooter>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

export default Administrador


/*<TouchableOpacity 
           //onPress={onPassword}
           
           style={styles.buttonPasswordIn}
           >
               <Text style={styles.buttonPasswordInText}>

               {loadingP ? 'Enviando a solicitação...' : 'Esqueceu a senha?'}
                
               </Text>
           </TouchableOpacity>
           */
