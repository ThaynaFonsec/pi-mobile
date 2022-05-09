import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function LogsButton  (props) {
  return (
    <Pressable style={styles.button}>
        <Text style={styles.textButton}>{props.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{
        width: 200,
        height: 52,
        borderWidth: 2,
        borderColor: '#03113c',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 13
    }
})
