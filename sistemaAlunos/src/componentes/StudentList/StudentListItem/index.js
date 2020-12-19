import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../styles/Colors'

const StudentListItem = ({student, onStudentPress}) => {
    return (

        <TouchableOpacity
        onPress={() => {
            onStudentPress && onStudentPress(student);
        }}
        >
        <View style={styles.container}>
            <View style={styles.photo}>
            <Text style={styles.descriptionRightText}>FOTO</Text>
            </View >

            <View style={styles.description}>
                <Text style={styles.descriptionText} >{student.name}</Text>
                <Text style={styles.descriptionText}>{student.responsible.responsible1.name}</Text>
                <Text style={styles.descriptionText} >{student.responsible.responsible2.name}</Text>
                <Text style={styles.descriptionText}>{student.responsible.responsible3.name}</Text>
                <Text style={styles.descriptionText}>{student.responsible.responsible4.name}</Text>

            </View>

            <View style={styles.descriptionRight}>
                <Text style={styles.descriptionRightText}>{student.class}</Text>
                <Text style={styles.descriptionRightText}>{student.phone1}</Text>
                <Text style={styles.descriptionRightText}>{student.phone2}</Text>
                <Text style={styles.descriptionRightText}>{student.phone3}</Text>
                <Text style={styles.descriptionRightText}>{student.phone4}</Text>

            </View>
            
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    photo: {},

    description: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 14,
        color: Colors.white,
    },
    descriptionRigth: {
        
        justifyContent: 'center',
    },
    descriptionRightText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.white,
    },

});
export default StudentListItem
