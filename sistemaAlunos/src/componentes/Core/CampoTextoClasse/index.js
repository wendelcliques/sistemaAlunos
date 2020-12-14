import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Colors from '../../../styles/Colors';

const CampoTextoClasse = ({
    value,
    onChangeValue,
}) => {
    return (
        <View style={styles.container}>
          <TextInput
           style={styles.input}
           placeholder="Ano Letivo"
           placeholderTextColor={Colors.carbon}
          // keyboardType="email-address"
           autoCapitalize="none"
           autoCorrect={false}
           value={value}
           onChangeText={text => {
               onChangeValue(text)
               
           }}
           />

         
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       backgroundColor: Colors.asphalt,
       borderRadius: 15,
       marginHorizontal: 20,
       marginVertical: 4,
    },

    input: {
       flex: 1,
       fontSize: 20,
       color: Colors.white,
       textAlign: 'center',
       paddingLeft: 0,
       paddingRight: 20,
    },
});

export default CampoTextoClasse
