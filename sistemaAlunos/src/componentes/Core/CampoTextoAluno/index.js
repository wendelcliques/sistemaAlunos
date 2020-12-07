import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Colors from '../../../styles/Colors';


const CampoTextoAluno = ({
    value,
    onChangeValue,
}) => {
    return (
        <View style={styles.container}>
          <TextInput
           style={styles.input}
           placeholder="Nome do aluno"
           placeholderTextColor={Colors.carbon}
          // keyboardType="email-address"
           autoCapitalize="none"
           autoCorrect={false}
           value={value}
           onChangeText={text => {
               onChangeValue(text)
               
           }}
           />

            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       backgroundColor: Colors.asphalt,
       borderRadius: 15,
       marginHorizontal: 20,
       marginVertical: 10,
    },

    input: {
       flex: 1,
       fontSize: 28,
       color: Colors.white,
       textAlign: 'center',
       paddingLeft: 0,
       paddingRight: 20,
    },
});

export default CampoTextoAluno




