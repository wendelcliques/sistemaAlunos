import React from 'react';
import {StatusBar, View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../styles/Colors';

const ButtonPanel = ({onNewStudentPress}) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.violet}/>
            <TouchableOpacity style={styles.button} onPress={onNewStudentPress}>
                <Icon name="add" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: -23,
    },
    button: {
        backgroundColor: Colors.green,
        borderRadius: 150,
        alignSelf: 'flex-end',
        alignItems: 'center',
        width: 50,
        height: 50,
        shadowColor: Colors.black,
        elevation: 5,
        marginTop: -25,
        marginRight: 10,
    },
});

export default ButtonPanel;