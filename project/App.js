import React from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import LogsButton from './src/components/Button';

export default function App () {
    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={require('./assets/Logo.png')}/> 
            </View>
            <View style={{paddingHorizontal: 20}}>
                <Text style={{color: '#03113c', marginLeft: 24, paddingTop: 26}}>LOG IN</Text>
            <View style={styles.formWrapper}>
                <Text style={styles.inputTitle}>Email:</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="mail" size={16} color='white' style={styles.icons}/>
                    <TextInput style={styles.inputField} placeholder='Insira o seu email...'/>
                </View>
                <Text style={styles.inputTitle}>Senha</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="lock" size={16} color='white' style={styles.icons}/>
                    <TextInput style={styles.inputField} placeholder='Digite sua senha...'/>
                </View>
            </View>
            </View>
            <View style={{alignItems: 'center', paddingTop: 64}}>
                <LogsButton title={'Log In'}></LogsButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "E5E5E5",
    },
    logoWrapper:{
        paddingTop: 130,
        alignItems: 'center'
    },
    logo: {
        width: 173,
        height: 193.6,
        paddingTop: 27
    },
    formWrapper:{
        width: 370,
        height: 242,
        backgroundColor: '#03113c',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 32,
        //marginBottom: 56
    },
    inputTitle:{
        //marginTop: 16,
        color: 'white',
    },
    inputWrapper:{
        width: 324,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#C4C4C4',
        opacity: 0.5,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 16
    },
    inputField:{
        padding: 10,
    },
    icons: {
        paddingLeft: 16,
    }
})