import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import LogsButton from '../components/Button'

export default function LandingPage () {
    return(
        <View>
            <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={require('../../assets/Logo.png')}/> 
            </View>
            <View style={styles.buttonWrapper}>
                <View >
                    <LogsButton title={'Log in'}/>
                </View>
                <View style={{paddingTop: 40}}>
                    <LogsButton title={'Register'}/>
                </View>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    logoWrapper:{
        paddingTop: 150,
        alignItems: 'center'
    },
    logo: {
        width: 210,
        height: 235,
        paddingTop: 27
    },
    buttonWrapper:{
        paddingHorizontal: 16,
        paddingTop: 190,
        alignItems: 'center'
    },
})